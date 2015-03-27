package com.xxxxxbbs.inner.controller;

import com.xxxxxbbs.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created on 3/27/15.
 *
 * @Author lianghongbin
 */
@Controller
public class MessageController {

    @Autowired
    private SmsService smsService;

    @RequestMapping(value = "/code", method = RequestMethod.POST)
    @ResponseBody
    public String index(String phone) {
        boolean result = smsService.send(new String[]{phone});
        if (!result) {
            return "发送验证码失败！";
        }

        return "";
    }
}
