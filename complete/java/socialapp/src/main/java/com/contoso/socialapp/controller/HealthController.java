package com.contoso.socialapp.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * Health check controller for the Social App.
 */
@Slf4j
@RestController
@RequestMapping("/api")
public class HealthController {

    /**
     * Health check endpoint.
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        log.info("Health check endpoint called");
        return ResponseEntity.ok(Map.of("status", "healthy"));
    }

    /**
     * Welcome endpoint.
     */
    @GetMapping("/welcome")
    public ResponseEntity<Map<String, String>> welcome() {
        log.info("Welcome endpoint called");
        return ResponseEntity.ok(Map.of("message", "Welcome to the Social Media API!"));
    }
}
