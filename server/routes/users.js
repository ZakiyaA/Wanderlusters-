var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const {db, getUserWithEmail, getUserEmail} = require('../db.js');
const { generateToken } = require('../utils/jwt.js');
// const {getUserWithEmail} = require('../db.js');



module.exports = (db) => {

  // Create a new user ...................
  router.post('/SignUp', async (req, res) => {
    const newUser = req.body;
   if (await getUserEmail(newUser.email) === newUser.email) {
    return res.status(400).send("Email is already in use.");
  } //if email is already in use throw an error.....
  else {
    const salt = bcrypt.genSaltSync(12);
    newUser.password = bcrypt.hashSync(newUser.password, salt) 
    return(
       db.query(`INSERT INTO users(firstName, lastName, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [newUser.firstName, newUser.lastName, newUser.email, newUser.password]))
    .then(data => {
      const users = data.rows;
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  }
  });

  /**
   * Check if a user exists with a given username and password
   * @param {String} email
   * @param {String} password encrypted
   */
  const login =  function(email, password) {
    return getUserWithEmail(email)

    .then(user => {
      // console.clear();
      // console.log({user});
      if (bcrypt.compareSync(password, user.password)) {
        return user;
      }
      return null;
    });
  }
  exports.login = login;

  router.post('/Login', (req, res) => {
    const {email, password} = req.body;
    login(email, password)
      .then(user => {
        // console.log("login", {user});
        if (!user) {
         
          return res.status(401).json({error: "invalid email or password"});
        }

        // req.session.userId = user.user_id;
        // console.log("seesionr", req.session)
        res.redirect("/")
        const token = generateToken(user);
        const userInfo = {firstName: user.firstName, 
                      firstName: user.lastName, 
                      email: user.email, 
                      user_id: user.user_id}
                      console.log("tokenBackEnd", token)
        return res.send({user: userInfo, token});

      })
      .catch(e => {
        console.log("error", e);
        // res.send(e);
      });
  });
  
  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({});
  });

  router.get("/me", (req, res) => {
    const userId = req.session.userId;
    if (!userId) {
      res.send({message: "not logged in"});
      return;
    }

    db.getUserWithId(userId)
      .then(user => {
        if (!user) {
          res.send({error: "no user with that id"});
          return;
        }
    
        res.send({user: {name: user.name, email: user.email, id: userId}});
      })
      .catch(e => res.send(e));
  });


  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    const {user} = req.body;
    db.query(`INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETERNING`,
    [name, email, password])
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post('/Itinerary', async (req, res) => {
    const data = req.body;
    getUserEmail();
    console.log("Dataataa", data)
    const user_id = 1;
    return(
       db.query(`INSERT INTO itinerary (placeName, guest_id, notes) VALUES ($1, $2, $3) RETURNING *;`,
      [data.placeName, user_id, data.notes]))
    .then(data => {
      const itinerary_data = data.rows;
      res.json({ itinerary_data });
      console.log(itinerary_data);
    })
    .catch(err => {
      console.log("Error", err);
      res
        .status(500)
        .json({ error: err.message });
      });
    });
  return router;
}



module.exports = router;
