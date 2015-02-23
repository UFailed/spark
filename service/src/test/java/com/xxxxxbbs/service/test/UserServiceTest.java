package com.xxxxxbbs.service.test;

import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.service.UserService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

/**
 * Created by lianghongbin on 2/22/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-*.xml")
public class UserServiceTest extends AbstractJUnit4SpringContextTests {

    @Autowired
    private UserService userService;

    @Test
    public void saveTest() {
        User user = new User();
        user.setName("lianghongbin");
        user.setPassword("123456");

        int result = userService.save(user);

        Assert.assertEquals(1, result);
    }
}
