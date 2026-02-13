package com.contoso.socialapp.repository;

import com.contoso.socialapp.model.dto.PostDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.Instant;
import java.util.*;

import com.fasterxml.jackson.databind.ObjectMapper;

@Repository
public class PostRepository {
    private final JdbcTemplate jdbc;
    private final ObjectMapper objectMapper;

    @Autowired
    public PostRepository(JdbcTemplate jdbc, ObjectMapper objectMapper) {
        this.jdbc = jdbc;
        this.objectMapper = objectMapper;
    }

    public void insertPost(String id, String username, String content, String createdAt, String updatedAt) {
        jdbc.update("INSERT INTO posts (id, username, content, created_at, updated_at, likes, likes_by) VALUES (?,?,?,?,?,?,?)",
                id, username, content, createdAt, updatedAt, 0, "[]");
    }

    public List<PostDTO> findAll() {
        List<PostDTO> list = jdbc.query("SELECT * FROM posts", new RowMapper<PostDTO>() {
            @Override
            public PostDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                PostDTO p = new PostDTO();
                p.setId(rs.getString("id"));
                p.setUsername(rs.getString("username"));
                p.setContent(rs.getString("content"));
                p.setCreatedAt(rs.getString("created_at"));
                p.setUpdatedAt(rs.getString("updated_at"));
                p.setLikesCount(rs.getInt("likes"));
                // commentsCount computed separately
                p.setCommentsCount(0);
                return p;
            }
        });
        // sort by createdAt desc
        list.sort(Comparator.comparing(PostDTO::getCreatedAt).reversed());
        return list;
    }

    public Optional<Map<String, Object>> findPostRow(String id) {
        SqlRowSet rs = jdbc.queryForRowSet("SELECT * FROM posts WHERE id = ?", id);
        if (rs.next()) {
            Map<String, Object> m = new HashMap<>();
            m.put("id", rs.getString("id"));
            m.put("username", rs.getString("username"));
            m.put("content", rs.getString("content"));
            m.put("created_at", rs.getString("created_at"));
            m.put("updated_at", rs.getString("updated_at"));
            m.put("likes", rs.getInt("likes"));
            m.put("likes_by", rs.getString("likes_by"));
            return Optional.of(m);
        }
        return Optional.empty();
    }

    public void updatePostContent(String id, String content, String updatedAt) {
        jdbc.update("UPDATE posts SET content = ?, updated_at = ? WHERE id = ?", content, updatedAt, id);
    }

    public void deletePost(String id) {
        jdbc.update("DELETE FROM posts WHERE id = ?", id);
    }

    public void setLikesByAndCount(String postId, List<String> likesBy) {
        try {
            String json = objectMapper.writeValueAsString(likesBy);
            jdbc.update("UPDATE posts SET likes = ?, likes_by = ? WHERE id = ?", likesBy.size(), json, postId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
