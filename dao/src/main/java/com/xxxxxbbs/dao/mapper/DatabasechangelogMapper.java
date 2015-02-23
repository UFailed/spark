package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.Databasechangelog;
import com.xxxxxbbs.core.model.DatabasechangelogCriteria;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DatabasechangelogMapper {
    int countByExample(DatabasechangelogCriteria example);

    int deleteByExample(DatabasechangelogCriteria example);

    int insert(Databasechangelog record);

    int insertSelective(Databasechangelog record);

    List<Databasechangelog> selectByExample(DatabasechangelogCriteria example);

    int updateByExampleSelective(@Param("record") Databasechangelog record, @Param("example") DatabasechangelogCriteria example);

    int updateByExample(@Param("record") Databasechangelog record, @Param("example") DatabasechangelogCriteria example);
}