package com.xxxxxbbs.service.sms;

/**
 * Created on 3/27/15.
 *
 * @Author lianghongbin
 */
public interface Marshaller {

    public void marshal(String phone, String message);

    public String unmarshal(String phone);
}
