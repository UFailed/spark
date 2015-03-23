package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created on 3/23/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/user/head/")
public class HeadController {

    @RequestMapping("/cut/")
    public String cut() {
        return "user-head-cut";
    }
}
