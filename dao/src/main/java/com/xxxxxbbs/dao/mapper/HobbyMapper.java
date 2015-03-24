package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.Hobby;
import com.xxxxxbbs.core.model.HobbyExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface HobbyMapper {
    int countByExample(HobbyExample example);

    int deleteByExample(HobbyExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Hobby record);

    int insertSelective(Hobby record);

    List<Hobby> selectByExample(HobbyExample example);

    Hobby selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Hobby record, @Param("example") HobbyExample example);

    int updateByExample(@Param("record") Hobby record, @Param("example") HobbyExample example);

    int updateByPrimaryKeySelective(Hobby record);

    int updateByPrimaryKey(Hobby record);
}