package com.xxxxxbbs.service.impl;

import com.xxxxxbbs.core.model.*;
import com.xxxxxbbs.dao.Page;
import com.xxxxxbbs.dao.mapper.RoleMapper;
import com.xxxxxbbs.dao.mapper.UserRoleMapper;
import com.xxxxxbbs.service.RoleService;
import com.xxxxxbbs.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lianghongbin on 3/3/15.
 */
@Service
@Transactional
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private UserRoleMapper userRoleMapper;
    @Autowired
    private UserService userService;

    @Override
    public List<Role> findByUsername(String username) {
        User user = userService.findByUsername(username);
        UserRoleExample userRoleExample = new UserRoleExample();
        userRoleExample.createCriteria().andUserIdEqualTo(user.getId());
        List<UserRole> userRoles = userRoleMapper.selectByExample(userRoleExample);

        List<Integer> roleIds = new ArrayList<>();
        for (UserRole userRole : userRoles) {
            roleIds.add(userRole.getRoleId());
        }

        RoleExample roleExample = new RoleExample();
        roleExample.createCriteria().andIdIn(roleIds);

        return roleMapper.selectByExample(roleExample);
    }

    @Override
    public List<Role> findByUserId(int id) {

        UserRoleExample userRoleExample = new UserRoleExample();
        userRoleExample.createCriteria().andUserIdEqualTo(id);
        List<UserRole> userRoles = userRoleMapper.selectByExample(userRoleExample);

        List<Integer> roleIds = new ArrayList<>();
        for (UserRole userRole : userRoles) {
            roleIds.add(userRole.getRoleId());
        }

        RoleExample roleExample = new RoleExample();
        roleExample.createCriteria().andIdIn(roleIds);

        return roleMapper.selectByExample(roleExample);
    }

    @Override
    public List<Role> findAll(Page page) {
        if (page == null) {
            page = new Page();
        }

        RoleExample roleExample = new RoleExample();
        roleExample.setLimitOffset(page.getOffset());
        roleExample.setLimit(page.getSize());

        return roleMapper.selectByExample(roleExample);
    }

    @Override
    public int save(Role role) {
        return roleMapper.insert(role);
    }

    @Override
    public int delete(int id) {
        return roleMapper.deleteByPrimaryKey(id);
    }
}
