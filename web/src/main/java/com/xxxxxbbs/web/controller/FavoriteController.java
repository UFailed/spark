package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 关注控制器
 * Created on 3/13/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/favorite")
public class FavoriteController {

    @RequestMapping("/")
    public String index() {
        return "index-favorite";
    }
}
