package com.xxxxxbbs.service;

import com.xxxxxbbs.core.model.External;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by spark on 2015/3/24.
 */
public interface ExternalService {

    public int save(External external);

    public int delete(int id);
}
