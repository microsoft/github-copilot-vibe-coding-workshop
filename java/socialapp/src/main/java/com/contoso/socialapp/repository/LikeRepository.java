package com.contoso.socialapp.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class LikeRepository {
    private final JdbcTemplate jdbc;

    @Autowired
    public LikeRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public boolean exists(String likeId) {
        SqlRowSet rs = jdbc.queryForRowSet("SELECT like_id FROM likes WHERE like_id = ?", likeId);
        return rs.next();
    }

    public void insertLike(String likeId, String postId, String username) {
        jdbc.update("INSERT INTO likes (like_id, post_id, username) VALUES (?,?,?)", likeId, postId, username);
    }

    public void deleteLike(String likeId) {
        jdbc.update("DELETE FROM likes WHERE like_id = ?", likeId);
    }

    public List<String> findUsernamesByPostId(String postId) {
        List<String> list = new ArrayList<>();
        jdbc.query("SELECT username FROM likes WHERE post_id = ?", new Object[]{postId}, (rs) -> {
            list.add(rs.getString("username"));
        });
        return list;
    }

    public void deleteByPostId(String postId) {
        jdbc.update("DELETE FROM likes WHERE post_id = ?", postId);
    }
}
