package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.Databasechangeloglock;
import com.xxxxxbbs.core.model.DatabasechangeloglockExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface DatabasechangeloglockMapper {
    int countByExample(DatabasechangeloglockExample example);

    int deleteByExample(DatabasechangeloglockExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(Databasechangeloglock record);

    int insertSelective(Databasechangeloglock record);

    List<Databasechangeloglock> selectByExample(DatabasechangeloglockExample example);

    Databasechangeloglock selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Databasechangeloglock record, @Param("example") DatabasechangeloglockExample example);

    int updateByExample(@Param("record") Databasechangeloglock record, @Param("example") DatabasechangeloglockExample example);

    int updateByPrimaryKeySelective(Databasechangeloglock record);

    int updateByPrimaryKey(Databasechangeloglock record);
}