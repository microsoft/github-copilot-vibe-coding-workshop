package com.contoso.socialapp.model.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class LikeRequest {
    @NotBlank
    @Size(min = 1, max = 100)
    private String username;

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
}
