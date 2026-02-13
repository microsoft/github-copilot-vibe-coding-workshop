package com.contoso.socialapp.service;

import com.contoso.socialapp.model.dto.PostDTO;
import com.contoso.socialapp.repository.PostRepository;
import com.contoso.socialapp.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@Service
public class PostService {
    private final PostRepository postRepo;
    private final CommentRepository commentRepo;
    private final com.contoso.socialapp.repository.LikeRepository likeRepo;

    @Autowired
    public PostService(PostRepository postRepo, CommentRepository commentRepo, com.contoso.socialapp.repository.LikeRepository likeRepo) {
        this.postRepo = postRepo;
        this.commentRepo = commentRepo;
        this.likeRepo = likeRepo;
    }

    public List<PostDTO> listPosts() {
        List<PostDTO> posts = postRepo.findAll();
        for (PostDTO p : posts) {
            int comments = commentRepo.countByPostId(p.getId());
            p.setCommentsCount(comments);
        }
        return posts;
    }

    public PostDTO createPost(String username, String content) {
        String id = UUID.randomUUID().toString();
        String now = Instant.now().toString();
        postRepo.insertPost(id, username, content, now, now);
        PostDTO p = new PostDTO();
        p.setId(id);
        p.setUsername(username);
        p.setContent(content);
        p.setCreatedAt(now);
        p.setUpdatedAt(now);
        p.setLikesCount(0);
        p.setCommentsCount(0);
        return p;
    }

    public Optional<PostDTO> getPostById(String id) {
        Optional<Map<String, Object>> row = postRepo.findPostRow(id);
        if (row.isEmpty()) return Optional.empty();
        Map<String, Object> m = row.get();
        PostDTO p = new PostDTO();
        p.setId((String)m.get("id"));
        p.setUsername((String)m.get("username"));
        p.setContent((String)m.get("content"));
        p.setCreatedAt((String)m.get("created_at"));
        p.setUpdatedAt((String)m.get("updated_at"));
        p.setLikesCount((Integer)m.get("likes"));
        p.setCommentsCount(commentRepo.countByPostId(id));
        return Optional.of(p);
    }

    public Optional<PostDTO> updatePost(String id, String username, String content) {
        Optional<Map<String, Object>> row = postRepo.findPostRow(id);
        if (row.isEmpty()) return Optional.empty();
        Map<String, Object> m = row.get();
        if (!((String)m.get("username")).equals(username)) return Optional.empty();
        String updatedAt = Instant.now().toString();
        postRepo.updatePostContent(id, content, updatedAt);
        return getPostById(id);
    }

    public boolean deletePost(String id) {
        Optional<Map<String, Object>> row = postRepo.findPostRow(id);
        if (row.isEmpty()) return false;
        // Delete post and cascade delete comments and likes via repositories
        postRepo.deletePost(id);
        commentRepo.deleteByPostId(id);
        likeRepo.deleteByPostId(id);
        return true;
    }
}
