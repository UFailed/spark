package com.xxxxxbbs.service.impl;

import com.xxxxxbbs.core.model.Post;
import com.xxxxxbbs.core.model.PostExample;
import com.xxxxxbbs.dao.mapper.PostMapper;
import com.xxxxxbbs.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created on 3/7/15.
 *
 * @Author lianghongbin
 */
@Service
@Transactional
public class PostServiceImpl implements PostService {

    @Autowired
    private PostMapper postMapper;

    @Override
    public int save(Post post) {
        return postMapper.insert(post);
    }

    @Override
    public int update(Post post) {
        return postMapper.updateByPrimaryKeySelective(post);
    }

    @Override
    public int delete(int id) {
        return postMapper.deleteByPrimaryKey(id);
    }

    @Override
    public Post findById(int id) {
        return postMapper.selectByPrimaryKey(id);
    }

    /**
     * 根据条件查询贴子列表
     *
     * @param postExample 查询条件
     * @return 查询贴子列表
     */
    @Override
    public List<Post> findByCondition(PostExample postExample) {
        return postMapper.selectByExample(postExample);
    }

    public int countByCondition(PostExample postExample) {
        return postMapper.countByExample(postExample);
    }
}
