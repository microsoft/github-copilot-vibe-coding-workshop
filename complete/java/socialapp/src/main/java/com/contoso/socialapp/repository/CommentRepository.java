package com.contoso.socialapp.repository;

import com.contoso.socialapp.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepository extends JpaRepository<Comment, String> {
    
    @Query("SELECT c FROM Comment c WHERE c.post.id = :postId ORDER BY c.createdAt ASC")
    List<Comment> findByPostIdOrderByCreatedAtAsc(@Param("postId") String postId);
    
    @Query("SELECT c FROM Comment c WHERE c.id = :commentId AND c.post.id = :postId")
    Optional<Comment> findByIdAndPostId(@Param("commentId") String commentId, @Param("postId") String postId);
}
