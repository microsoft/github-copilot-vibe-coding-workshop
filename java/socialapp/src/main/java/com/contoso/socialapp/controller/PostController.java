package com.contoso.socialapp.controller;

import com.contoso.socialapp.model.dto.*;
import com.contoso.socialapp.service.CommentService;
import com.contoso.socialapp.service.LikeService;
import com.contoso.socialapp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@Validated
public class PostController {
    private final PostService postService;
    private final CommentService commentService;
    private final LikeService likeService;

    @Autowired
    public PostController(PostService postService, CommentService commentService, LikeService likeService) {
        this.postService = postService;
        this.commentService = commentService;
        this.likeService = likeService;
    }

    @GetMapping("/posts")
    public ResponseEntity<List<PostDTO>> listPosts() {
        return ResponseEntity.ok(postService.listPosts());
    }

    @PostMapping("/posts")
    public ResponseEntity<PostDTO> createPost(@Valid @RequestBody NewPostRequest req) {
        PostDTO p = postService.createPost(req.getUsername(), req.getContent());
        return ResponseEntity.status(HttpStatus.CREATED).body(p);
    }

    @GetMapping("/posts/{postId}")
    public ResponseEntity<PostDTO> getPost(@PathVariable("postId") String postId) {
        Optional<PostDTO> p = postService.getPostById(postId);
        if (p.isEmpty()) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Post with ID '" + postId + "' not found");
        return ResponseEntity.ok(p.get());
    }

    @PatchMapping("/posts/{postId}")
    public ResponseEntity<PostDTO> updatePost(@PathVariable("postId") String postId, @Valid @RequestBody UpdatePostRequest req) {
        Optional<PostDTO> p = postService.updatePost(postId, req.getUsername(), req.getContent());
        if (p.isEmpty()) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Post not found or you do not have permission to update it");
        return ResponseEntity.ok(p.get());
    }

    @DeleteMapping("/posts/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable("postId") String postId) {
        boolean deleted = postService.deletePost(postId);
        if (!deleted) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Post with ID '" + postId + "' not found");
        return ResponseEntity.noContent().build();
    }

    // Comments
    @GetMapping("/posts/{postId}/comments")
    public ResponseEntity<List<CommentDTO>> listComments(@PathVariable("postId") String postId) {
        // Verify post exists
        Optional<PostDTO> p = postService.getPostById(postId);
        if (p.isEmpty()) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Post with ID '" + postId + "' not found");
        return ResponseEntity.ok(commentService.listCommentsByPostId(postId));
    }

    @PostMapping("/posts/{postId}/comments")
    public ResponseEntity<CommentDTO> createComment(@PathVariable("postId") String postId, @Valid @RequestBody NewCommentRequest req) {
        var c = commentService.createComment(postId, req.getUsername(), req.getContent());
        if (c.isEmpty()) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Post with ID '" + postId + "' not found");
        return ResponseEntity.status(HttpStatus.CREATED).body(c.get());
    }

    @GetMapping("/posts/{postId}/comments/{commentId}")
    public ResponseEntity<CommentDTO> getComment(@PathVariable("postId") String postId, @PathVariable("commentId") String commentId) {
        var c = commentService.getComment(postId, commentId);
        if (c.isEmpty()) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Comment with ID '" + commentId + "' not found on post '" + postId + "'");
        return ResponseEntity.ok(c.get());
    }

    @PatchMapping("/posts/{postId}/comments/{commentId}")
    public ResponseEntity<CommentDTO> updateComment(@PathVariable("postId") String postId, @PathVariable("commentId") String commentId, @Valid @RequestBody UpdateCommentRequest req) {
        var c = commentService.updateComment(postId, commentId, req.getUsername(), req.getContent());
        if (c.isEmpty()) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Comment not found or you do not have permission to update it");
        return ResponseEntity.ok(c.get());
    }

    @DeleteMapping("/posts/{postId}/comments/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable("postId") String postId, @PathVariable("commentId") String commentId) {
        boolean deleted = commentService.deleteComment(postId, commentId);
        if (!deleted) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Comment with ID '" + commentId + "' not found");
        return ResponseEntity.noContent().build();
    }

    // Likes
    @PostMapping("/posts/{postId}/likes")
    public ResponseEntity<LikeResponse> likePost(@PathVariable("postId") String postId, @Valid @RequestBody LikeRequest req) {
        var r = likeService.addLike(postId, req.getUsername());
        if (r == null) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Post with ID '" + postId + "' not found");
        return ResponseEntity.status(HttpStatus.CREATED).body(r);
    }

    @DeleteMapping("/posts/{postId}/likes")
    public ResponseEntity<Void> unlikePost(@PathVariable("postId") String postId, @Valid @RequestBody LikeRequest req) {
        boolean existsPost = postService.getPostById(postId).isPresent();
        if (!existsPost) throw new com.contoso.socialapp.exception.ResourceNotFoundException("Post with ID '" + postId + "' not found");
        likeService.removeLike(postId, req.getUsername());
        return ResponseEntity.noContent().build();
    }
}
