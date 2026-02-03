package com.contoso.socialapp.service;

import com.contoso.socialapp.model.dto.CommentDTO;
import com.contoso.socialapp.repository.CommentRepository;
import com.contoso.socialapp.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Service
public class CommentService {
    private final CommentRepository commentRepo;
    private final PostRepository postRepo;

    @Autowired
    public CommentService(CommentRepository commentRepo, PostRepository postRepo) {
        this.commentRepo = commentRepo;
        this.postRepo = postRepo;
    }

    public Optional<CommentDTO> createComment(String postId, String username, String content) {
        if (postRepo.findPostRow(postId).isEmpty()) return Optional.empty();
        String id = UUID.randomUUID().toString();
        String now = Instant.now().toString();
        commentRepo.insertComment(id, postId, username, content, now, now);
        Optional<CommentDTO> c = commentRepo.findByPostAndId(postId, id);
        return c;
    }

    public Optional<CommentDTO> getComment(String postId, String commentId) {
        return commentRepo.findByPostAndId(postId, commentId);
    }

    public java.util.List<CommentDTO> listCommentsByPostId(String postId) {
        return commentRepo.findByPostId(postId);
    }

    public Optional<CommentDTO> updateComment(String postId, String commentId, String username, String content) {
        Optional<CommentDTO> existing = commentRepo.findByPostAndId(postId, commentId);
        if (existing.isEmpty()) return Optional.empty();
        CommentDTO c = existing.get();
        if (!c.getUsername().equals(username)) return Optional.empty();
        String now = Instant.now().toString();
        commentRepo.updateCommentContent(commentId, content, now);
        return commentRepo.findByPostAndId(postId, commentId);
    }

    public boolean deleteComment(String postId, String commentId) {
        Optional<CommentDTO> c = commentRepo.findByPostAndId(postId, commentId);
        if (c.isEmpty()) return false;
        commentRepo.deleteComment(commentId);
        return true;
    }
}
