package com.contoso.socialapp.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "likes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(LikeId.class)
public class Like {
    
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;
    
    @Id
    @Column(nullable = false, length = 50)
    private String username;
    
    @Column(name = "liked_at", nullable = false)
    private LocalDateTime likedAt;
    
    @PrePersist
    protected void onCreate() {
        likedAt = LocalDateTime.now();
    }
    
    // Helper method to get postId
    public String getPostId() {
        return post != null ? post.getId() : null;
    }
}
