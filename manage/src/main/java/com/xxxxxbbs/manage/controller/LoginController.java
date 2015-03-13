package com.xxxxxbbs.manage.controller;

import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.service.shiro.PasswordHelper;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.subject.Subject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

/**
 * Created on 3/10/15.
 *
 * @Author lianghongbin
 */
@Controller
public class LoginController {

    @Autowired
    private PasswordHelper passwordHelper;

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String index(Model model) {
        model.addAttribute("user", new User());
        return "login";
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(User user, boolean rememberMe, Map<String, Object> map) {
        passwordHelper.encryptPassword(user);
        try {
            UsernamePasswordToken token = new UsernamePasswordToken(user.getUsername(), user.getPassword());
            token.setRememberMe(rememberMe);
            //使用权限工具进行用户登录，登录成功后跳到shiro配置的successUrl中，与下面的return没什么关系！
            Subject subject = SecurityUtils.getSubject();
            subject.login(token);
            return "redirect:/main";
        } catch (UnknownAccountException uae) {
            map.put("message", "UnknownAccountException");
        } catch (IncorrectCredentialsException ice) {
            map.put("message", "IncorrectCredentialsException");
        } catch (LockedAccountException lae) {
            map.put("message", "LockedAccountException");
        } catch (ExcessiveAttemptsException eae) {
            map.put("message", "ExcessiveAttemptsException");
        } catch (AuthenticationException ae) {
            ae.printStackTrace();
        }

        return "login";
    }

    @RequestMapping(value = "/main", method = RequestMethod.GET)
    public String main(Map<String, Object> map) {
        Subject subject = SecurityUtils.getSubject();
        subject.getPrincipals().asList();
        map.put("username", subject.getPrincipal());
        return "main";
    }
}
