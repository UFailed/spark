package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 选题控制器
 * Created on 3/13/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/selected")
public class SelectedController {

    @RequestMapping("/")
    public String index() {
        return "index-selected";
    }
}
