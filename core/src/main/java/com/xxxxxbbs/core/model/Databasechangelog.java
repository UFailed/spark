package com.xxxxxbbs.core.model;

import java.util.Date;

public class Databasechangelog {
    private String id;

    private String author;

    private String filename;

    private Date dateexecuted;

    private Integer orderexecuted;

    private String exectype;

    private String md5sum;

    private String description;

    private String comments;

    private String tag;

    private String liquibase;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public Date getDateexecuted() {
        return dateexecuted;
    }

    public void setDateexecuted(Date dateexecuted) {
        this.dateexecuted = dateexecuted;
    }

    public Integer getOrderexecuted() {
        return orderexecuted;
    }

    public void setOrderexecuted(Integer orderexecuted) {
        this.orderexecuted = orderexecuted;
    }

    public String getExectype() {
        return exectype;
    }

    public void setExectype(String exectype) {
        this.exectype = exectype;
    }

    public String getMd5sum() {
        return md5sum;
    }

    public void setMd5sum(String md5sum) {
        this.md5sum = md5sum;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getLiquibase() {
        return liquibase;
    }

    public void setLiquibase(String liquibase) {
        this.liquibase = liquibase;
    }
}