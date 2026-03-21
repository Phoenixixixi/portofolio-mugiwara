-- SQL script to initialize the database for the portfolio

-- Table to store messages from the contact form
CREATE TABLE IF NOT EXISTS messages_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
