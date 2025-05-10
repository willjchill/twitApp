-- Create the test database
CREATE DATABASE IF NOT EXISTS testdb;

-- Use the test database
USE testdb;

-- Create the users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert some test users
INSERT INTO users (username, password) VALUES
('alice', 'password123'),
('bob', 'hunter2'),
('charlie', 'qwerty');
