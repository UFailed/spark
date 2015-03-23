package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 排行榜控制器
 * Created on 3/13/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/top")
public class TopController {

    @RequestMapping("/")
    public String index() {
        return "index-top";
    }
}
