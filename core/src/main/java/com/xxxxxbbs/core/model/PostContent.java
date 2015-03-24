package com.xxxxxbbs.core.model;

import java.util.Date;

public class PostContent {
    private Integer id;

    private Integer postId;

    private Date createTime;

    private Boolean manager;

    private Integer top;

    private Integer storey;

    private Integer parentId;

    private Integer userId;

    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPostId() {
        return postId;
    }

    public void setPostId(Integer postId) {
        this.postId = postId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Boolean getManager() {
        return manager;
    }

    public void setManager(Boolean manager) {
        this.manager = manager;
    }

    public Integer getTop() {
        return top;
    }

    public void setTop(Integer top) {
        this.top = top;
    }

    public Integer getStorey() {
        return storey;
    }

    public void setStorey(Integer storey) {
        this.storey = storey;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public boolean equals(Object that) {
        if (this == that) {
            return true;
        }
        if (that == null) {
            return false;
        }
        if (getClass() != that.getClass()) {
            return false;
        }
        PostContent other = (PostContent) that;
        return (this.getId() == null ? other.getId() == null : this.getId().equals(other.getId()))
            && (this.getPostId() == null ? other.getPostId() == null : this.getPostId().equals(other.getPostId()))
            && (this.getCreateTime() == null ? other.getCreateTime() == null : this.getCreateTime().equals(other.getCreateTime()))
            && (this.getManager() == null ? other.getManager() == null : this.getManager().equals(other.getManager()))
            && (this.getTop() == null ? other.getTop() == null : this.getTop().equals(other.getTop()))
            && (this.getStorey() == null ? other.getStorey() == null : this.getStorey().equals(other.getStorey()))
            && (this.getParentId() == null ? other.getParentId() == null : this.getParentId().equals(other.getParentId()))
            && (this.getUserId() == null ? other.getUserId() == null : this.getUserId().equals(other.getUserId()))
            && (this.getContent() == null ? other.getContent() == null : this.getContent().equals(other.getContent()));
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + ((getId() == null) ? 0 : getId().hashCode());
        result = prime * result + ((getPostId() == null) ? 0 : getPostId().hashCode());
        result = prime * result + ((getCreateTime() == null) ? 0 : getCreateTime().hashCode());
        result = prime * result + ((getManager() == null) ? 0 : getManager().hashCode());
        result = prime * result + ((getTop() == null) ? 0 : getTop().hashCode());
        result = prime * result + ((getStorey() == null) ? 0 : getStorey().hashCode());
        result = prime * result + ((getParentId() == null) ? 0 : getParentId().hashCode());
        result = prime * result + ((getUserId() == null) ? 0 : getUserId().hashCode());
        result = prime * result + ((getContent() == null) ? 0 : getContent().hashCode());
        return result;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", postId=").append(postId);
        sb.append(", createTime=").append(createTime);
        sb.append(", manager=").append(manager);
        sb.append(", top=").append(top);
        sb.append(", storey=").append(storey);
        sb.append(", parentId=").append(parentId);
        sb.append(", userId=").append(userId);
        sb.append(", content=").append(content);
        sb.append("]");
        return sb.toString();
    }
}