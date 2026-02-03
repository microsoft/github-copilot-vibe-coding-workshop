package com.contoso.socialapp.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class DatabaseInitializer {

    private final JdbcTemplate jdbc;

    @Autowired
    public DatabaseInitializer(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    @PostConstruct
    public void init() {
        // Drop and recreate tables on every startup to mirror FastAPI init_database behavior
        jdbc.execute("DROP TABLE IF EXISTS likes");
        jdbc.execute("DROP TABLE IF EXISTS comments");
        jdbc.execute("DROP TABLE IF EXISTS posts");

        jdbc.execute("CREATE TABLE posts ("
                + "id TEXT PRIMARY KEY,"
                + "username TEXT NOT NULL,"
                + "content TEXT NOT NULL,"
                + "created_at TEXT NOT NULL,"
                + "updated_at TEXT NOT NULL,"
                + "likes INTEGER NOT NULL,"
                + "likes_by TEXT NOT NULL"
                + ")");

        jdbc.execute("CREATE TABLE comments ("
                + "id TEXT PRIMARY KEY,"
                + "post_id TEXT NOT NULL,"
                + "username TEXT NOT NULL,"
                + "content TEXT NOT NULL,"
                + "created_at TEXT NOT NULL,"
                + "updated_at TEXT NOT NULL,"
                + "likes INTEGER NOT NULL"
                + ")");

        jdbc.execute("CREATE TABLE likes ("
                + "like_id TEXT PRIMARY KEY,"
                + "post_id TEXT NOT NULL,"
                + "username TEXT NOT NULL"
                + ")");
    }
}
