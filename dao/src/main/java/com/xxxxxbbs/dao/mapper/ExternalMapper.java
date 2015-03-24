package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.External;
import com.xxxxxbbs.core.model.ExternalExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ExternalMapper {
    int countByExample(ExternalExample example);

    int deleteByExample(ExternalExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(External record);

    int insertSelective(External record);

    List<External> selectByExample(ExternalExample example);

    External selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") External record, @Param("example") ExternalExample example);

    int updateByExample(@Param("record") External record, @Param("example") ExternalExample example);

    int updateByPrimaryKeySelective(External record);

    int updateByPrimaryKey(External record);
}