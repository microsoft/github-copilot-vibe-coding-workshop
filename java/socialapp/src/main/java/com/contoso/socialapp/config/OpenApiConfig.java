package com.contoso.socialapp.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class OpenApiConfig {
    
    @Value("${server.port:8080}")
    private String serverPort;
    
    @Bean
    public OpenAPI customOpenAPI() {
        List<Server> servers = new ArrayList<>();
        
        // Detect GitHub Codespaces environment
        String codespaceName = System.getenv("CODESPACE_NAME");
        String githubCodespacesPortForwardingDomain = System.getenv("GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN");
        
        if (codespaceName != null && githubCodespacesPortForwardingDomain != null) {
            // GitHub Codespaces environment
            String codespaceUrl = "https://" + codespaceName + "-" + serverPort + "." + githubCodespacesPortForwardingDomain;
            servers.add(new Server()
                    .url(codespaceUrl)
                    .description("GitHub Codespaces server"));
        }
        
        // Always add localhost server
        servers.add(new Server()
                .url("http://localhost:" + serverPort)
                .description("Local development server"));
        
        return new OpenAPI()
                .info(new Info()
                        .title("Simple Social Media API")
                        .description("A basic Social Networking Service (SNS) API that allows users to create, retrieve, update, and delete posts; add comments; and like/unlike posts.")
                        .version("1.0.0")
                        .contact(new Contact()
                                .name("Contoso Product Team")
                                .email("support@contoso.com"))
                        .license(new License()
                                .name("MIT")
                                .url("https://opensource.org/licenses/MIT")))
                .servers(servers);
    }
}
