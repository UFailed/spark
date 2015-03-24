package com.xxxxxbbs.dao.mapper;

import com.xxxxxbbs.core.model.Databasechangelog;
import com.xxxxxbbs.core.model.DatabasechangelogExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface DatabasechangelogMapper {
    int countByExample(DatabasechangelogExample example);

    int deleteByExample(DatabasechangelogExample example);

    int insert(Databasechangelog record);

    int insertSelective(Databasechangelog record);

    List<Databasechangelog> selectByExample(DatabasechangelogExample example);

    int updateByExampleSelective(@Param("record") Databasechangelog record, @Param("example") DatabasechangelogExample example);

    int updateByExample(@Param("record") Databasechangelog record, @Param("example") DatabasechangelogExample example);
}