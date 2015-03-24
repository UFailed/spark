package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.PostContent;
import com.xxxxxbbs.core.model.PostContentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PostContentMapper {
    int countByExample(PostContentExample example);

    int deleteByExample(PostContentExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(PostContent record);

    int insertSelective(PostContent record);

    List<PostContent> selectByExampleWithBLOBs(PostContentExample example);

    List<PostContent> selectByExample(PostContentExample example);

    PostContent selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") PostContent record, @Param("example") PostContentExample example);

    int updateByExampleWithBLOBs(@Param("record") PostContent record, @Param("example") PostContentExample example);

    int updateByExample(@Param("record") PostContent record, @Param("example") PostContentExample example);

    int updateByPrimaryKeySelective(PostContent record);

    int updateByPrimaryKeyWithBLOBs(PostContent record);

    int updateByPrimaryKey(PostContent record);
}