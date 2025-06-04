package com.contoso.socialapp.service;

import com.contoso.socialapp.dto.*;
import com.contoso.socialapp.entity.Comment;
import com.contoso.socialapp.entity.Post;
import com.contoso.socialapp.repository.CommentRepository;
import com.contoso.socialapp.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class CommentService {
    
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;
    
    public List<CommentResponse> getCommentsByPostId(String postId) {
        log.info("Retrieving comments for post ID: {}", postId);
        return commentRepository.findByPostIdOrderByCreatedAtAsc(postId)
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }
    
    public Optional<CommentResponse> createComment(String postId, NewCommentRequest request) {
        log.info("Creating new comment for post ID: {} by user: {}", postId, request.getUsername());
        
        return postRepository.findById(postId)
                .map(post -> {
                    Comment comment = new Comment();
                    comment.setPost(post);
                    comment.setUsername(request.getUsername());
                    comment.setContent(request.getContent());
                    
                    Comment savedComment = commentRepository.save(comment);
                    log.info("Created comment with ID: {} for post ID: {}", savedComment.getId(), postId);
                    
                    return convertToResponse(savedComment);
                });
    }
    
    public Optional<CommentResponse> getCommentById(String postId, String commentId) {
        log.info("Retrieving comment with ID: {} for post ID: {}", commentId, postId);
        return commentRepository.findByIdAndPostId(commentId, postId)
                .map(this::convertToResponse);
    }
    
    public Optional<CommentResponse> updateComment(String postId, String commentId, UpdateCommentRequest request) {
        log.info("Updating comment with ID: {} for post ID: {} by user: {}", commentId, postId, request.getUsername());
        
        return commentRepository.findByIdAndPostId(commentId, postId)
                .filter(comment -> comment.getUsername().equals(request.getUsername()))
                .map(comment -> {
                    comment.setContent(request.getContent());
                    Comment savedComment = commentRepository.save(comment);
                    log.info("Updated comment with ID: {} for post ID: {}", savedComment.getId(), postId);
                    return convertToResponse(savedComment);
                });
    }
    
    public boolean deleteComment(String postId, String commentId) {
        log.info("Deleting comment with ID: {} for post ID: {}", commentId, postId);
        
        Optional<Comment> comment = commentRepository.findByIdAndPostId(commentId, postId);
        if (comment.isPresent()) {
            commentRepository.delete(comment.get());
            log.info("Deleted comment with ID: {} for post ID: {}", commentId, postId);
            return true;
        }
        
        log.warn("Comment with ID {} not found for post ID {} for deletion", commentId, postId);
        return false;
    }
    
    private CommentResponse convertToResponse(Comment comment) {
        return new CommentResponse(
                comment.getId(),
                comment.getPostId(),
                comment.getUsername(),
                comment.getContent(),
                comment.getCreatedAt(),
                comment.getUpdatedAt()
        );
    }
}
