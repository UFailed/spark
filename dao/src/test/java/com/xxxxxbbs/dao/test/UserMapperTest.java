package com.xxxxxbbs.dao.test;

import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.dao.mapper.UserMapper;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by lianghongbin on 2/22/15.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-dao.xml")
public class UserMapperTest extends AbstractJUnit4SpringContextTests {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void insertTest() {
        User user = new User();
        user.setUsername("lianghongbin");
        user.setPassword("123456");

        int result = userMapper.insert(user);

        Assert.assertEquals(1, result);
    }
}