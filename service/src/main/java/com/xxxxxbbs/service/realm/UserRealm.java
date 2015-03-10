package com.xxxxxbbs.service.realm;

import com.xxxxxbbs.core.model.Permission;
import com.xxxxxbbs.core.model.Role;
import com.xxxxxbbs.core.model.User;
import com.xxxxxbbs.service.PermissionService;
import com.xxxxxbbs.service.RoleService;
import com.xxxxxbbs.service.UserService;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserRealm extends AuthorizingRealm {

    @Autowired
    private UserService userService;
    @Autowired
    private RoleService roleService;
    @Autowired
    private PermissionService permissionService;

    /**
     * 授权操作
     */
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        String username = (String) principals.getPrimaryPrincipal();

        List<Role> roleSet = roleService.findByUsername(username);
        //角色名的集合
        Set<String> roles = new HashSet<String>();
        //权限名的集合
        Set<String> permissions = new HashSet<String>();

        for (Role aRole : roleSet) {
            roles.add(aRole.getName());
            List<Permission> permissionList = permissionService.findByRole(aRole.getId());
            for (Permission per : permissionList) {
                permissions.add(per.getName());
            }
        }

        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();

        authorizationInfo.addRoles(roles);
        authorizationInfo.addStringPermissions(permissions);

        return authorizationInfo;
    }

    /**
     * 身份验证操作
     */
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(
            AuthenticationToken token) throws AuthenticationException {

        String username = (String) token.getPrincipal();
        User user = userService.findByUsername(username);

        if (user == null) {
            //木有找到用户
            throw new UnknownAccountException("没有找到该账号");
        }

        /**
         * 交给AuthenticatingRealm使用CredentialsMatcher进行密码匹配，如果觉得人家的不好可以在此判断或自定义实现
         */

        return new SimpleAuthenticationInfo(user.getUsername(), user.getPassword(), getName());
    }

    @Override
    public String getName() {
        return getClass().getName();
    }
}