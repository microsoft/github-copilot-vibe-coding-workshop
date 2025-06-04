package com.contoso.socialapp.service;

import com.contoso.socialapp.dto.*;
import com.contoso.socialapp.entity.Post;
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
public class PostService {
    
    private final PostRepository postRepository;
    
    public List<PostResponse> getAllPosts() {
        log.info("Retrieving all posts");
        return postRepository.findAllOrderByCreatedAtDesc()
                .stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }
    
    public PostResponse createPost(NewPostRequest request) {
        log.info("Creating new post for user: {}", request.getUsername());
        
        Post post = new Post();
        post.setUsername(request.getUsername());
        post.setContent(request.getContent());
        
        Post savedPost = postRepository.save(post);
        log.info("Created post with ID: {}", savedPost.getId());
        
        return convertToResponse(savedPost);
    }
    
    public Optional<PostResponse> getPostById(String postId) {
        log.info("Retrieving post with ID: {}", postId);
        return postRepository.findById(postId)
                .map(this::convertToResponse);
    }
    
    public Optional<PostResponse> updatePost(String postId, UpdatePostRequest request) {
        log.info("Updating post with ID: {} by user: {}", postId, request.getUsername());
        
        return postRepository.findById(postId)
                .filter(post -> post.getUsername().equals(request.getUsername()))
                .map(post -> {
                    post.setContent(request.getContent());
                    Post savedPost = postRepository.save(post);
                    log.info("Updated post with ID: {}", savedPost.getId());
                    return convertToResponse(savedPost);
                });
    }
    
    public boolean deletePost(String postId) {
        log.info("Deleting post with ID: {}", postId);
        
        if (postRepository.existsById(postId)) {
            postRepository.deleteById(postId);
            log.info("Deleted post with ID: {}", postId);
            return true;
        }
        
        log.warn("Post with ID {} not found for deletion", postId);
        return false;
    }
    
    public boolean postExists(String postId) {
        return postRepository.existsById(postId);
    }
    
    private PostResponse convertToResponse(Post post) {
        return new PostResponse(
                post.getId(),
                post.getUsername(),
                post.getContent(),
                post.getCreatedAt(),
                post.getUpdatedAt(),
                post.getLikesCount(),
                post.getCommentsCount()
        );
    }
}
