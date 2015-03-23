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
@RequestMapping("/user")
public class UserController {

    @RequestMapping("/center/")
    public String index() {
        return "user-center";
    }

    @RequestMapping("/data/")
    public String data() {
        return "user-data";
    }

    @RequestMapping("/setup/")
    public String setup() {
        return "user-setup";
    }

    @RequestMapping("/score/")
    public String score() {
        return "user-score";
    }

    @RequestMapping("/favorite/")
    public String favorite() {
        return "user-favorite";
    }

    @RequestMapping("/album/")
    public String album() {
        return "user-album";
    }

    @RequestMapping("/post/")
    public String post() {
        return "user-post";
    }

    @RequestMapping("/message/")
    public String message() {
        return "user-message";
    }

    @RequestMapping("/friend/")
    public String friend() {
        return "user-friend";
    }
}
