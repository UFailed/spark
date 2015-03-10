package com.xxxxxbbs.service;

import com.xxxxxbbs.core.model.Role;
import com.xxxxxbbs.dao.Page;

import java.util.List;

/**
 * Created by lianghongbin on 3/3/15.
 */
public interface RoleService {

    public List<Role> findByUsername(String username);

    public List<Role> findByUserId(int id);

    /**
     * 分页获取所有角色
     *
     * @param page 分页参数； null时获取所有记录不分页
     * @return 分页或所有记录
     */
    public List<Role> findAll(Page page);

    public int save(Role role);

    public int delete(int id);
}
