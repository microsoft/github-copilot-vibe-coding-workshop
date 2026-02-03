package com.contoso.socialapp.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LikeResponse {
    @JsonProperty("postId")
    private String postId;

    @JsonProperty("username")
    private String username;

    @JsonProperty("likedAt")
    private String likedAt;

    public LikeResponse(String postId, String username, String likedAt) {
        this.postId = postId;
        this.username = username;
        this.likedAt = likedAt;
    }

    public String getPostId() { return postId; }
    public String getUsername() { return username; }
    public String getLikedAt() { return likedAt; }
}
