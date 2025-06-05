package com.contoso.socialapp.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorResponse {
    
    private String error;
    private String message;
    private List<String> details;
    
    public ErrorResponse(String error, String message) {
        this.error = error;
        this.message = message;
    }
}
