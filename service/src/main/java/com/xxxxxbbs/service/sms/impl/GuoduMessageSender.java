package com.xxxxxbbs.service.sms.impl;

import com.xxxxxbbs.service.MessageSender;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

/**
 * Created on 3/26/15.
 *
 * @Author lianghongbin
 */
public class GuoduMessageSender implements MessageSender {

    private static Logger logger = LoggerFactory.getLogger(GuoduMessageSender.class);
    private String username;
    private String password;
    private String contentType = "8";
    private String sendTime = "";
    private String appendId = "";
    private String validTime = "";
    private String url;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public String getSendTime() {
        return sendTime;
    }

    public void setSendTime(String sendTime) {
        this.sendTime = sendTime;
    }

    public String getAppendId() {
        return appendId;
    }

    public void setAppendId(String appendId) {
        this.appendId = appendId;
    }

    public String getValidTime() {
        return validTime;
    }

    public void setValidTime(String validTime) {
        this.validTime = validTime;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public boolean send(String message, String[] destinations) {
        /*将内容用URLEncoder编一次GBK*/
        String encodeContent = "";
        try {
            encodeContent = URLEncoder.encode(message, "GBK");
        } catch (UnsupportedEncodingException e) {
            logger.error(e.getMessage());
        }

		/*将手机号从数组转变成一个用逗号分开的字符串，字符串末尾有逗号不影响消息下发。*/
        String DesMobile = "";
        StringBuilder builder = new StringBuilder();
        for (String destination : destinations) {
            builder.append(destination);
            builder.append(",");
        }

		/*消息参数*/
        String str = "OperID=" + username + "&OperPass=" + password + "&SendTime=" + sendTime + "&ValidTime=" + validTime + "&AppendID=" + appendId + "&DesMobile=" + builder.toString() + "&Content=" + encodeContent + "&ContentType=" + contentType;

        /*使用post方式发送消息*/
        String result = this.postURL(str, url);
        return true;
    }

    /**
     * @param commString 需要发送的url参数串
     * @param address    需要发送的url地址
     * @return rec_string  国都返回的XML格式的串
     */
    private String postURL(String commString, String address) {
        String rec_string = "";
        URL url = null;
        HttpURLConnection urlConn = null;
        try {
            /*得到url地址的URL类*/
            url = new URL(address);
			/*获得打开需要发送的url连接*/
            urlConn = (HttpURLConnection) url.openConnection();
			/*设置连接超时时间*/
            urlConn.setConnectTimeout(30000);
			/*设置读取响应超时时间*/
            urlConn.setReadTimeout(30000);
			/*设置post发送方式*/
            urlConn.setRequestMethod("POST");
			/*发送commString*/
            urlConn.setDoOutput(true);
            urlConn.setDoInput(true);
            OutputStream out = urlConn.getOutputStream();
            out.write(commString.getBytes());
            out.flush();
            out.close();
			/*发送完毕 获取返回流，解析流数据*/
            BufferedReader rd = new BufferedReader(new InputStreamReader(urlConn.getInputStream(), "GBK"));
            StringBuilder sb = new StringBuilder();
            int ch;
            while ((ch = rd.read()) > -1) {
                sb.append((char) ch);
            }
            rec_string = sb.toString().trim();
			/*解析完毕关闭输入流*/
            rd.close();
        } catch (Exception e) {
			/*异常处理*/
            rec_string = "-107";
            logger.error(e.getMessage());
        } finally {
            if (urlConn != null) {
				/*关闭URL连接*/
                urlConn.disconnect();
            }
        }

		/*返回响应内容*/
        return rec_string;
    }
}
