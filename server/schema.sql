CREATE DATABASE Wanderlusters;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS places CASCADE;  

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);


CREATE TABLE places(
id SERIAL PRIMARY KEY NOT NULL,
guest_id INTEGER NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
location_id VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
website VARCHAR(255) NOT NULL
);
