package com.xxxxxbbs.service.impl;

import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.core.model.UserExample;
import com.xxxxxbbs.dao.mapper.UserMapper;
import com.xxxxxbbs.service.UserService;
import com.xxxxxbbs.service.shiro.PasswordHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created on 2/22/15.
 * @Author lianghongbin
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private PasswordHelper passwordHelper;

    @Override
    public int delete(int id) {
        return userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public User findByUsername(String username) {
        UserExample userExample = new UserExample();
        userExample.createCriteria().andUsernameEqualTo(username);

        List<User> users = userMapper.selectByExample(userExample);
        if (users.size() == 0) {
            return null;
        }

        return users.get(0);
    }

    @Override
    public List<User> findByCondition(UserExample userExample) {
        return userMapper.selectByExample(userExample);
    }

    @Override
    public User find(int id) {
        return userMapper.selectByPrimaryKey(id);
    }

    @Override
    public int save(User user) {
        passwordHelper.encryptPassword(user);
        return userMapper.insert(user);
    }
}
