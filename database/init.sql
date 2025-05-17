-- Create the test database
CREATE DATABASE IF NOT EXISTS testdb;

-- Use the test database
USE testdb;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    followers 
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(username) -- assume unique username
);

CREATE TABLE IF NOT EXISTS tweets (
    username VARCHAR(50) NOT NULL,
    postid INT AUTO_INCREMENT,
    content TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (postid),
    FOREIGN KEY (username) REFERENCES users(username)
);

-- Insert some test users
INSERT IGNORE INTO users (username, password) VALUES
('alice', 'password123'),
('bob', 'hunter2'),
('charlie', 'qwerty');

INSERT IGNORE INTO tweets (username, content) VALUES
('alice', 'Hello world! (✿◠‿◠)'),
('bob', 'Monolithic or serverless... who wins?? 😈'),
('charlie', 'ngl coding full-stack is kinda fun tho 💻🔥');
