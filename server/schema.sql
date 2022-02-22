CREATE DATABASE Wanderlusters;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS itinerary CASCADE;  

CREATE TABLE itinerary(
id SERIAL PRIMARY KEY NOT NULL,
guest_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
placename VARCHAR(255) NOT NULL,
website VARCHAR(255) NOT NULL,
notes TEXT NOT NULL
);

