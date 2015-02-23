package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.Databasechangeloglock;
import com.xxxxxbbs.core.model.DatabasechangeloglockCriteria;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DatabasechangeloglockMapper {
    int countByExample(DatabasechangeloglockCriteria example);

    int deleteByExample(DatabasechangeloglockCriteria example);

    int deleteByPrimaryKey(Integer id);

    int insert(Databasechangeloglock record);

    int insertSelective(Databasechangeloglock record);

    List<Databasechangeloglock> selectByExample(DatabasechangeloglockCriteria example);

    Databasechangeloglock selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") Databasechangeloglock record, @Param("example") DatabasechangeloglockCriteria example);

    int updateByExample(@Param("record") Databasechangeloglock record, @Param("example") DatabasechangeloglockCriteria example);

    int updateByPrimaryKeySelective(Databasechangeloglock record);

    int updateByPrimaryKey(Databasechangeloglock record);
}