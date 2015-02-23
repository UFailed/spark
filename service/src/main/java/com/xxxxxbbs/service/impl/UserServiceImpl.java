package com.xxxxxbbs.service.impl;

import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.dao.mapper.UserMapper;
import com.xxxxxbbs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by lianghongbin on 2/22/15.
 */
@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public int save(User user) {
        return userMapper.insert(user);
    }
}
