package com.xxxxxbbs.service.impl;

import com.xxxxxbbs.core.model.Permission;
import com.xxxxxbbs.core.model.PermissionExample;
import com.xxxxxbbs.core.model.RolePermission;
import com.xxxxxbbs.core.model.RolePermissionExample;
import com.xxxxxbbs.dao.mapper.PermissionMapper;
import com.xxxxxbbs.dao.mapper.RolePermissionMapper;
import com.xxxxxbbs.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created on 3/4/15.
 *
 * @Author lianghongbin
 */
@Service
@Transactional
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionMapper permissionMapper;
    @Autowired
    private RolePermissionMapper rolePermissionMapper;

    @Override
    public int save(Permission permission) {
        return permissionMapper.insert(permission);
    }

    @Override
    public int delete(int id) {
        return permissionMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<Permission> findByRole(int id) {
        RolePermissionExample rolePermissionExample = new RolePermissionExample();
        rolePermissionExample.createCriteria().andRoleIdEqualTo(id);
        List<RolePermission> rolePermissions = rolePermissionMapper.selectByExample(rolePermissionExample);
        List<Integer> permissionIds = new ArrayList<>();
        for (RolePermission rolePermission : rolePermissions) {
            permissionIds.add(rolePermission.getPermissionId());
        }

        PermissionExample permissionExample = new PermissionExample();
        permissionExample.createCriteria().andIdIn(permissionIds);

        return permissionMapper.selectByExample(permissionExample);
    }
}
