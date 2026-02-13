package com.contoso.socialapp.controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.InputStream;

@RestController
public class OpenApiController {

    @GetMapping(value = "/v3/api-docs", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<JsonNode> apiDocs() throws Exception {
        ClassPathResource r = new ClassPathResource("static/openapi.yaml");
        try (InputStream in = r.getInputStream()) {
            ObjectMapper yamlReader = new YAMLMapper();
            JsonNode obj = yamlReader.readTree(in);
            return ResponseEntity.ok(obj);
        }
    }
}
