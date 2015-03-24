package com.xxxxxbbs.service;

import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.core.model.UserExample;

import java.util.List;

/**
 * Created by lianghongbin on 2/22/15.
 */
public interface UserService {

    public int save(User user);

    public int delete(int id);

    public User findByUsername(String username);

    public List<User> findByCondition(UserExample userExample);

    public User find(int id);
}
