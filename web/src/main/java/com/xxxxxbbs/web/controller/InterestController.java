package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 兴趣控制器
 * Created on 3/13/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/interest")
public class InterestController {

    @RequestMapping("/")
    public String index() {
        return "index-interest";
    }
}
