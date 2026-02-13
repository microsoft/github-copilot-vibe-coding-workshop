package com.contoso.socialapp.repository;

import com.contoso.socialapp.model.dto.CommentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;

@Repository
public class CommentRepository {
    private final JdbcTemplate jdbc;

    @Autowired
    public CommentRepository(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public void insertComment(String id, String postId, String username, String content, String createdAt, String updatedAt) {
        jdbc.update("INSERT INTO comments (id, post_id, username, content, created_at, updated_at, likes) VALUES (?,?,?,?,?,?,?)",
                id, postId, username, content, createdAt, updatedAt, 0);
    }

    public List<CommentDTO> findByPostId(String postId) {
        return jdbc.query("SELECT * FROM comments WHERE post_id = ?", new Object[]{postId}, new RowMapper<CommentDTO>() {
            @Override
            public CommentDTO mapRow(ResultSet rs, int rowNum) throws SQLException {
                CommentDTO c = new CommentDTO();
                c.setId(rs.getString("id"));
                c.setPostId(rs.getString("post_id"));
                c.setUsername(rs.getString("username"));
                c.setContent(rs.getString("content"));
                c.setCreatedAt(rs.getString("created_at"));
                c.setUpdatedAt(rs.getString("updated_at"));
                return c;
            }
        });
    }

    public Optional<CommentDTO> findByPostAndId(String postId, String commentId) {
        SqlRowSet rs = jdbc.queryForRowSet("SELECT * FROM comments WHERE id = ?", commentId);
        if (rs.next() && rs.getString("post_id").equals(postId)) {
            CommentDTO c = new CommentDTO();
            c.setId(rs.getString("id"));
            c.setPostId(rs.getString("post_id"));
            c.setUsername(rs.getString("username"));
            c.setContent(rs.getString("content"));
            c.setCreatedAt(rs.getString("created_at"));
            c.setUpdatedAt(rs.getString("updated_at"));
            return Optional.of(c);
        }
        return Optional.empty();
    }

    public void updateCommentContent(String commentId, String content, String updatedAt) {
        jdbc.update("UPDATE comments SET content = ?, updated_at = ? WHERE id = ?", content, updatedAt, commentId);
    }

    public void deleteComment(String commentId) {
        jdbc.update("DELETE FROM comments WHERE id = ?", commentId);
    }

    public int countByPostId(String postId) {
        Integer count = jdbc.queryForObject("SELECT COUNT(*) FROM comments WHERE post_id = ?", Integer.class, postId);
        return count == null ? 0 : count;
    }

    public void deleteByPostId(String postId) {
        jdbc.update("DELETE FROM comments WHERE post_id = ?", postId);
    }
}
