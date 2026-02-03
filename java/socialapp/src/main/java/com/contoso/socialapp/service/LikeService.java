package com.contoso.socialapp.service;

import com.contoso.socialapp.repository.LikeRepository;
import com.contoso.socialapp.repository.PostRepository;
import com.contoso.socialapp.model.dto.LikeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class LikeService {
    private final LikeRepository likeRepo;
    private final PostRepository postRepo;
    private final ObjectMapper objectMapper;

    @Autowired
    public LikeService(LikeRepository likeRepo, PostRepository postRepo, ObjectMapper objectMapper) {
        this.likeRepo = likeRepo;
        this.postRepo = postRepo;
        this.objectMapper = objectMapper;
    }

    public LikeResponse addLike(String postId, String username) {
        var postRow = postRepo.findPostRow(postId);
        if (postRow.isEmpty()) return null;
        String likeId = postId + "#" + username;
        if (!likeRepo.exists(likeId)) {
            likeRepo.insertLike(likeId, postId, username);
            // update posts.likes_by json and likes count
            String likesByJson = (String) postRow.get().get("likes_by");
            try {
                List<String> likesBy = objectMapper.readValue(likesByJson, new TypeReference<List<String>>(){});
                likesBy.add(username);
                postRepo.setLikesByAndCount(postId, likesBy);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        String likedAt = Instant.now().toString();
        return new LikeResponse(postId, username, likedAt);
    }

    public boolean removeLike(String postId, String username) {
        var postRow = postRepo.findPostRow(postId);
        if (postRow.isEmpty()) return false;
        String likeId = postId + "#" + username;
        if (likeRepo.exists(likeId)) {
            likeRepo.deleteLike(likeId);
            String likesByJson = (String) postRow.get().get("likes_by");
            try {
                List<String> likesBy = objectMapper.readValue(likesByJson, new TypeReference<List<String>>(){});
                likesBy.removeIf(u -> u.equals(username));
                postRepo.setLikesByAndCount(postId, likesBy);
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }
        return true;
    }
}
