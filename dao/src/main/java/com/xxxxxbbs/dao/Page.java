package com.xxxxxbbs.dao;

/**
 * Created by lianghongbin on 3/3/15.
 */
public class Page {
    // 分页查询开始记录位置
    private int offset;

    // 每页显示记录数
    private int size = Integer.MAX_VALUE;
    // 查询结果总记录数
    private int count;
    // 当前页码
    private int current = 1;
    // 总共页数
    private int total;

    public Page() {
    }

    /**
     * 构造函数
     *
     * @param current 查询当前页码
     * @param size    每页记录条数
     */
    public Page(int current, int size) {
        this.offset = offset;
        this.current = current <= 0 ? 1 : current;
        this.size = size;
        this.offset = (current - 1) * size > Integer.MAX_VALUE ? Integer.MAX_VALUE : (current - 1) * size;
    }

    /**
     * @param current 查询当前页码
     * @param size    每页记录条数
     * @param count   总记录数
     */
    public Page(int current, int size, int count) {
        this(current, size);
        this.count = count;
    }

    /**
     * @return the begin
     */
    public int getOffset() {
        return offset;
    }

    /**
     * @return the length
     */
    public int getSize() {
        return size;
    }

    /**
     * @param size the size to set
     */
    public void setSize(int size) {
        this.size = size;
    }

    /**
     * @return the count
     */
    public int getCount() {
        return count;
    }

    /**
     * @param count the count to set
     */
    public void setCount(int count) {
        this.count = count;
        this.total = (int) Math.floor((this.count * 1.0d) / this.size);
        if (this.count % this.size != 0) {
            this.total++;
        }
    }

    /**
     * @return the current
     */
    public int getCurrent() {
        return current;
    }

    /**
     * @param current the current to set
     */
    public void setCurrent(int current) {
        this.current = current;
    }

    /**
     * @return the total
     */
    public int getTotal() {
        if (total == 0) {
            return 1;
        }

        return total;
    }
}