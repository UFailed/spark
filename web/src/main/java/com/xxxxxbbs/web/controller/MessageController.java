package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created on 3/23/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/user/message/")
public class MessageController {

    @RequestMapping("/comment/")
    public String comment() {
        return "user-message-comment";
    }

    @RequestMapping("/private/")
    public String personal() {
        return "user-message-private";
    }

    @RequestMapping("/system/")
    public String system() {
        return "user-message-private";
    }
}
