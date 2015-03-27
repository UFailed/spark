package com.xxxxxbbs.inner.controller;

import com.xxxxxbbs.core.model.External;
import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.core.model.UserExample;
import com.xxxxxbbs.service.ExternalService;
import com.xxxxxbbs.service.UserService;
import com.xxxxxbbs.service.sms.Marshaller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

/**
 * Created by spark on 2015/3/24.
 */
@Controller
public class IndexController {

    @Autowired
    private UserService userService;
    @Autowired
    private ExternalService externalService;
    @Autowired
    private Marshaller marshaller;

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public String register(String phone, String password, String code, ExternalForm externalForm) {

        if (!marshaller.unmarshal(phone).equals(code)) {
            return "验证码错误";
        }

        UserExample userExample = new UserExample();
        userExample.createCriteria().andPhoneEqualTo(phone);
        User user;
        int result = 0;
        List<User> users = userService.findByCondition(userExample);
        if (users == null || users.size() == 0) {
            user = new User();
            user.setUsername("U_" + phone);
            user.setPassword(password);
            user.setPhone(phone);
            user.setCreateTime(new Date());
            result = userService.save(user);
        } else {
            user = users.get(0);
            result = 1;
        }

        for (String url : externalForm.getUrls()) {
            External external = new External();
            external.setUserId(user.getId());
            external.setCreateTime(new Date());
            external.setUrl(url);
            externalService.save(external);
        }

        return result > 0 ? "" : "注册失败";
    }
}
