package com.xxxxxbbs.manage.controller;

import com.xxxxxbbs.core.model.Post;
import com.xxxxxbbs.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created on 3/9/15.
 *
 * @Author lianghongbin
 */
@Controller
@RequestMapping("/post")
public class PostController {

    @Autowired
    private PostService postService;

    @RequestMapping("{id}.html")
    public ModelAndView execute(@PathVariable("id") String id) {

        ModelAndView modelAndView = new ModelAndView("index");
        modelAndView.addObject("id", id);

        return modelAndView;
    }

    @RequestMapping(value = "/input", method = RequestMethod.GET)
    public String input() {
        return "post_input";
    }

    /**
     * 通过json方式进行提交
     *
     * @param post 自动封闭的post对象模型
     * @return 返回json类型的结果
     */
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    @ResponseBody
    public String save(Post post) {
        int result = postService.save(post);
        if (result == 1) {
            return "succeed";
        }

        return "failed";
    }
}
