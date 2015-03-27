package com.xxxxxbbs.inner.controller;

import com.xxxxxbbs.service.sms.Marshaller;
import org.springframework.beans.factory.annotation.Autowired;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created on 3/27/15.
 *
 * @Author lianghongbin
 */
public class SessionMarshaller implements Marshaller {

    @Autowired
    private HttpServletRequest request;
    private final String SUFFIX = "checkcode-";

    @Override
    public void marshal(String phone, String message) {
        HttpSession session = request.getSession();
        session.setMaxInactiveInterval(60);
        session.setAttribute(SUFFIX + phone, message);
    }

    @Override
    public String unmarshal(String phone) {
        HttpSession session = request.getSession();
        return (String) session.getAttribute(SUFFIX + phone);
    }
}
