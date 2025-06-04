package com.contoso.socialapp.controller;

import com.contoso.socialapp.dto.LikeRequest;
import com.contoso.socialapp.dto.LikeResponse;
import com.contoso.socialapp.service.LikeService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/posts/{postId}/likes")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Likes", description = "Operations related to likes")
public class LikeController {
    
    private final LikeService likeService;
    
    @PostMapping
    @Operation(summary = "Like a post", description = "Add a like to a post to show appreciation.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Like added successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request data"),
            @ApiResponse(responseCode = "404", description = "Post not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<LikeResponse> addLike(@PathVariable String postId, @Valid @RequestBody LikeRequest request) {
        try {
            return likeService.addLike(postId, request)
                    .map(like -> ResponseEntity.status(HttpStatus.CREATED).body(like))
                    .orElseThrow(() -> new RuntimeException("NOT_FOUND: Post not found"));
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error adding like to post ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @DeleteMapping
    @Operation(summary = "Unlike a post", description = "Remove a like from a post.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Like removed successfully"),
            @ApiResponse(responseCode = "404", description = "Like not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<Void> removeLike(@PathVariable String postId, @RequestParam String username) {
        try {
            boolean removed = likeService.removeLike(postId, username);
            if (removed) {
                return ResponseEntity.noContent().build();
            } else {
                throw new RuntimeException("NOT_FOUND: Like not found");
            }
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error removing like from post ID: " + postId + " by user: " + username, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
}
