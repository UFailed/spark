package com.xxxxxbbs.service;

/**
 * 消息发送接口（短信、邮件、站内）
 * Created on 3/26/15.
 *
 * @Author lianghongbin
 */
public interface MessageSender {

    public boolean send(String message, String[] destinations);
}
