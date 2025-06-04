package com.contoso.socialapp.controller;

import com.contoso.socialapp.dto.*;
import com.contoso.socialapp.service.PostService;
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

import java.util.List;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Posts", description = "Operations related to posts")
public class PostController {
    
    private final PostService postService;
    
    @GetMapping
    @Operation(summary = "List all posts", description = "Retrieve all recent posts to browse what others are sharing.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved posts"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<PostResponse>> getAllPosts() {
        try {
            List<PostResponse> posts = postService.getAllPosts();
            return ResponseEntity.ok(posts);
        } catch (Exception e) {
            log.error("Error retrieving posts", e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @PostMapping
    @Operation(summary = "Create a new post", description = "Create a new post to share something with others.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Post created successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request data"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<PostResponse> createPost(@Valid @RequestBody NewPostRequest request) {
        try {
            PostResponse post = postService.createPost(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(post);
        } catch (Exception e) {
            log.error("Error creating post", e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @GetMapping("/{postId}")
    @Operation(summary = "Get a specific post", description = "Retrieve a specific post by its ID to read in detail.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Post found"),
            @ApiResponse(responseCode = "404", description = "Post not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<PostResponse> getPostById(@PathVariable String postId) {
        try {
            return postService.getPostById(postId)
                    .map(post -> ResponseEntity.ok(post))
                    .orElseThrow(() -> new RuntimeException("NOT_FOUND: Post not found"));
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error retrieving post with ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @PatchMapping("/{postId}")
    @Operation(summary = "Update a post", description = "Update an existing post if you made a mistake or have something to add.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Post updated successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request data"),
            @ApiResponse(responseCode = "404", description = "Post not found or no permission"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<PostResponse> updatePost(@PathVariable String postId, @Valid @RequestBody UpdatePostRequest request) {
        try {
            return postService.updatePost(postId, request)
                    .map(post -> ResponseEntity.ok(post))
                    .orElseThrow(() -> new RuntimeException("NOT_FOUND: Post not found or you don't have permission to update it"));
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error updating post with ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/{postId}")
    @Operation(summary = "Delete a post", description = "Delete a post if you no longer want it shared.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Post deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Post not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<Void> deletePost(@PathVariable String postId) {
        try {
            boolean deleted = postService.deletePost(postId);
            if (deleted) {
                return ResponseEntity.noContent().build();
            } else {
                throw new RuntimeException("NOT_FOUND: Post not found");
            }
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error deleting post with ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
}
