package com.contoso.socialapp.repository;

import com.contoso.socialapp.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, String> {
    
    @Query("SELECT p FROM Post p ORDER BY p.createdAt DESC")
    List<Post> findAllOrderByCreatedAtDesc();
}
