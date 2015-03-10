package com.xxxxxbbs.service;

import com.xxxxxbbs.core.model.Post;
import com.xxxxxbbs.core.model.PostExample;

import java.util.List;

/**
 * Created on 3/7/15.
 *
 * @Author lianghongbin
 */
public interface PostService {

    public int save(Post post);

    public int update(Post post);

    public int delete(int id);

    public Post findById(int id);

    /**
     * 根据条件统计总条数
     *
     * @param postExample 查询条件
     * @return 总条数
     */
    public int countByCondition(PostExample postExample);

    /**
     * 根据条件查询贴子列表
     *
     * @param postExample 查询条件
     * @return 查询贴子列表
     */
    public List<Post> findByCondition(PostExample postExample);
}
