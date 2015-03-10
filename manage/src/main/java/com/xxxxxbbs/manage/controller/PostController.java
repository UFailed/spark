package com.xxxxxbbs.manage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created on 3/9/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/post")
public class PostController {

    @RequestMapping("index.do")
    public String execute() {
        return "index.jsp";
    }
}
