package com.xxxxxbbs.service.impl;

import com.xxxxxbbs.core.model.External;
import com.xxxxxbbs.dao.mapper.ExternalMapper;
import com.xxxxxbbs.service.ExternalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by spark on 2015/3/24.
 */
@Service
@Transactional
public class ExternalServiceImpl implements ExternalService {

    @Autowired
    private ExternalMapper externalMapper;

    @Override
    public int save(External external) {
        return externalMapper.insert(external);
    }

    @Override
    public int delete(int id) {
        return externalMapper.deleteByPrimaryKey(id);
    }
}
