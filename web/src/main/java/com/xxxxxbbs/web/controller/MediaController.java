package com.xxxxxbbs.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created on 3/23/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/user/media/")
public class MediaController {

    @RequestMapping("/album/")
    public String album() {
        return "user-media-album";
    }

    @RequestMapping("/video/")
    public String video() {
        return "user-media-video";
    }
}
