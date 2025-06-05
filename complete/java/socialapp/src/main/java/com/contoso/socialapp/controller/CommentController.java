package com.contoso.socialapp.controller;

import com.contoso.socialapp.dto.*;
import com.contoso.socialapp.service.CommentService;
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
@RequestMapping("/api/posts/{postId}/comments")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "Comments", description = "Operations related to comments")
public class CommentController {
    
    private final CommentService commentService;
    private final PostService postService;
    
    @GetMapping
    @Operation(summary = "List comments for a post", description = "Retrieve all comments on a specific post.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved comments"),
            @ApiResponse(responseCode = "404", description = "Post not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<List<CommentResponse>> getCommentsByPostId(@PathVariable String postId) {
        try {
            // Check if post exists
            if (!postService.postExists(postId)) {
                throw new RuntimeException("NOT_FOUND: Post not found");
            }
            
            List<CommentResponse> comments = commentService.getCommentsByPostId(postId);
            return ResponseEntity.ok(comments);
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error retrieving comments for post ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @PostMapping
    @Operation(summary = "Create a comment", description = "Add a comment to a post to share your thoughts.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Comment created successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request data"),
            @ApiResponse(responseCode = "404", description = "Post not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<CommentResponse> createComment(@PathVariable String postId, @Valid @RequestBody NewCommentRequest request) {
        try {
            return commentService.createComment(postId, request)
                    .map(comment -> ResponseEntity.status(HttpStatus.CREATED).body(comment))
                    .orElseThrow(() -> new RuntimeException("NOT_FOUND: Post not found"));
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error creating comment for post ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @GetMapping("/{commentId}")
    @Operation(summary = "Get a specific comment", description = "Retrieve a specific comment by its ID.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comment found"),
            @ApiResponse(responseCode = "404", description = "Comment not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<CommentResponse> getCommentById(@PathVariable String postId, @PathVariable String commentId) {
        try {
            return commentService.getCommentById(postId, commentId)
                    .map(comment -> ResponseEntity.ok(comment))
                    .orElseThrow(() -> new RuntimeException("NOT_FOUND: Comment not found"));
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error retrieving comment with ID: " + commentId + " for post ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @PatchMapping("/{commentId}")
    @Operation(summary = "Update a comment", description = "Update an existing comment to correct or revise it.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Comment updated successfully"),
            @ApiResponse(responseCode = "400", description = "Invalid request data"),
            @ApiResponse(responseCode = "404", description = "Comment not found or no permission"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<CommentResponse> updateComment(@PathVariable String postId, @PathVariable String commentId, @Valid @RequestBody UpdateCommentRequest request) {
        try {
            return commentService.updateComment(postId, commentId, request)
                    .map(comment -> ResponseEntity.ok(comment))
                    .orElseThrow(() -> new RuntimeException("NOT_FOUND: Comment not found or you don't have permission to update it"));
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error updating comment with ID: " + commentId + " for post ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
    
    @DeleteMapping("/{commentId}")
    @Operation(summary = "Delete a comment", description = "Delete a comment if you no longer want it shared.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "204", description = "Comment deleted successfully"),
            @ApiResponse(responseCode = "404", description = "Comment not found"),
            @ApiResponse(responseCode = "500", description = "Internal server error")
    })
    public ResponseEntity<Void> deleteComment(@PathVariable String postId, @PathVariable String commentId) {
        try {
            boolean deleted = commentService.deleteComment(postId, commentId);
            if (deleted) {
                return ResponseEntity.noContent().build();
            } else {
                throw new RuntimeException("NOT_FOUND: Comment not found");
            }
        } catch (RuntimeException e) {
            if (e.getMessage().startsWith("NOT_FOUND")) {
                throw e;
            }
            log.error("Error deleting comment with ID: " + commentId + " for post ID: " + postId, e);
            throw new RuntimeException("INTERNAL_SERVER_ERROR: " + e.getMessage());
        }
    }
}
