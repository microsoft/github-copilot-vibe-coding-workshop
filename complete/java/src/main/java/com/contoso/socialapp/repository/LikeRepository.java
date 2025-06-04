package com.contoso.socialapp.repository;

import com.contoso.socialapp.entity.Like;
import com.contoso.socialapp.entity.LikeId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, LikeId> {
    
    @Query("SELECT l FROM Like l WHERE l.post.id = :postId AND l.username = :username")
    Optional<Like> findByPostIdAndUsername(@Param("postId") String postId, @Param("username") String username);
    
    @Query("DELETE FROM Like l WHERE l.post.id = :postId AND l.username = :username")
    void deleteByPostIdAndUsername(@Param("postId") String postId, @Param("username") String username);
}
