package com.xxxxxbbs.service.sms.impl;

import com.xxxxxbbs.service.sms.CodeGenerator;

import java.util.Random;

/**
 * Created on 3/26/15.
 *
 * @Author lianghongbin
 */
public class DefaultCodeGenerator implements CodeGenerator {

    @Override
    public String generate() {
        Random random = new Random(System.currentTimeMillis());
        int result = Math.abs(random.nextInt()) % 1000000;    //6位验证码
        return String.valueOf(result);
    }
}
