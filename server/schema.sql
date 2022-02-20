CREATE DATABASE Wanderlusters;
DROP TABLE IF EXISTS users CASCADE;
<<<<<<< HEAD
  

=======
>>>>>>> main

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS itinerary CASCADE;  

<<<<<<< HEAD
DROP TABLE IF EXISTS itinerary CASCADE;  

=======
>>>>>>> main
CREATE TABLE itinerary(
id SERIAL PRIMARY KEY NOT NULL,
guest_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
placeName VARCHAR(255) NOT NULL,
notes TEXT NOT NULL
);
