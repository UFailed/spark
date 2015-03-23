package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created on 3/23/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/user/friend/")
public class FriendController {

    @RequestMapping("/follow/")
    public String follow() {
        return "user-friend-follow";
    }

    @RequestMapping("/fans/")
    public String fans() {
        return "user-friend-fans";
    }

    @RequestMapping("/black/")
    public String black() {
        return "user-friend-black";
    }
}
