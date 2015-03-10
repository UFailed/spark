package com.xxxxxbbs.service;

import com.xxxxxbbs.core.model.Permission;

import java.util.List;

/**
 * Created by lianghongbin on 3/4/15.
 *
 * @Author lianghongbin
 */
public interface PermissionService {

    public int save(Permission permission);

    public int delete(int id);

    public List<Permission> findByRole(int id);
}
