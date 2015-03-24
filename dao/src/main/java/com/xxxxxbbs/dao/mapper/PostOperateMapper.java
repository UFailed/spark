package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.PostOperate;
import com.xxxxxbbs.core.model.PostOperateExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface PostOperateMapper {
    int countByExample(PostOperateExample example);

    int deleteByExample(PostOperateExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(PostOperate record);

    int insertSelective(PostOperate record);

    List<PostOperate> selectByExampleWithBLOBs(PostOperateExample example);

    List<PostOperate> selectByExample(PostOperateExample example);

    PostOperate selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") PostOperate record, @Param("example") PostOperateExample example);

    int updateByExampleWithBLOBs(@Param("record") PostOperate record, @Param("example") PostOperateExample example);

    int updateByExample(@Param("record") PostOperate record, @Param("example") PostOperateExample example);

    int updateByPrimaryKeySelective(PostOperate record);

    int updateByPrimaryKeyWithBLOBs(PostOperate record);

    int updateByPrimaryKey(PostOperate record);
}