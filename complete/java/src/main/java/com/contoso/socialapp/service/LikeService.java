package com.contoso.socialapp.service;

import com.contoso.socialapp.dto.LikeRequest;
import com.contoso.socialapp.dto.LikeResponse;
import com.contoso.socialapp.entity.Like;
import com.contoso.socialapp.entity.Post;
import com.contoso.socialapp.repository.LikeRepository;
import com.contoso.socialapp.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class LikeService {
    
    private final LikeRepository likeRepository;
    private final PostRepository postRepository;
    
    public Optional<LikeResponse> addLike(String postId, LikeRequest request) {
        log.info("Adding like to post ID: {} by user: {}", postId, request.getUsername());
        
        // Check if post exists
        Optional<Post> postOpt = postRepository.findById(postId);
        if (postOpt.isEmpty()) {
            log.warn("Post with ID {} not found for like", postId);
            return Optional.empty();
        }
        
        Post post = postOpt.get();
        
        // Check if user already liked this post
        Optional<Like> existingLike = likeRepository.findByPostIdAndUsername(postId, request.getUsername());
        if (existingLike.isPresent()) {
            log.info("User {} already liked post ID: {}, returning existing like", request.getUsername(), postId);
            return Optional.of(convertToResponse(existingLike.get()));
        }
        
        // Create new like
        Like like = new Like();
        like.setPost(post);
        like.setUsername(request.getUsername());
        
        Like savedLike = likeRepository.save(like);
        log.info("Added like to post ID: {} by user: {}", postId, request.getUsername());
        
        return Optional.of(convertToResponse(savedLike));
    }
    
    public boolean removeLike(String postId, String username) {
        log.info("Removing like from post ID: {} by user: {}", postId, username);
        
        Optional<Like> like = likeRepository.findByPostIdAndUsername(postId, username);
        if (like.isPresent()) {
            likeRepository.delete(like.get());
            log.info("Removed like from post ID: {} by user: {}", postId, username);
            return true;
        }
        
        log.warn("Like not found for post ID: {} by user: {}", postId, username);
        return false;
    }
    
    private LikeResponse convertToResponse(Like like) {
        return new LikeResponse(
                like.getPostId(),
                like.getUsername(),
                like.getLikedAt()
        );
    }
}
