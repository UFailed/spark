package com.xxxxxbbs.service.impl;

import com.xxxxxbbs.service.MessageSender;
import com.xxxxxbbs.service.SmsService;
import com.xxxxxbbs.service.sms.CodeGenerator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * Created on 3/26/15.
 *
 * @Author lianghongbin
 */
public class SmsServiceImpl implements SmsService {

    private CodeGenerator codeGenerator;
    private List<MessageSender> messageSenders;
    private static final Logger logger = LoggerFactory.getLogger(SmsServiceImpl.class);

    public void setCodeGenerator(CodeGenerator codeGenerator) {
        this.codeGenerator = codeGenerator;
    }

    public void setMessageSenders(List<MessageSender> messageSenders) {
        this.messageSenders = messageSenders;
    }

    @Override
    public boolean send(String[] phones) {
        String content = codeGenerator.generate();
        for (MessageSender sender : messageSenders) {
            if (!sender.send(content, phones)) {
                logger.error("一个消息发送器出错!");
                continue;
            }

            return true;
        }

        return false;
    }
}
