package com.xxxxxbbs.service;

import com.xxxxxbbs.core.model.User;

/**
 * Created by lianghongbin on 2/22/15.
 */
public interface UserService {

    public int save(User user);

    public int delete(int id);

    public User findByUsername(String username);

    public User find(int id);
}
