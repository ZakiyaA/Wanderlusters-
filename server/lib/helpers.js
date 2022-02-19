const { response } = require('express');
const db = require('./db');

const getUserData = (db) => {
  return db.query(`   
SELECT favourites.location_name, notes.content, ratings.rating
FROM favourites
JOIN users ON favourites.user_id = users.id
JOIN ratings ON ratings.user_id = users.id
JOIN notes ON notes.user_id = users.id
WHERE favourites.user_id =1; 
  `)
    .then((response) => {
      return response.rows;
    });
};

const getUserById = (db, id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    });
};

const setItenary = (db) => {
  return db.query(`
    INSERT INTO itenary (place_name, notes, rating, completed)
    VALUES($1, $2, $3, $4)
    RETURNING *;`
    ,[place_name, notes, rating, completed])
    .then((response) => {
      return response.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    })
  }

const setFavourites = ()

module.exports = {
  getUsers,
  getUserById
}

