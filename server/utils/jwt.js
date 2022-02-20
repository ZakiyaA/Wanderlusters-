const jwt = require('jsonwebtoken');


const JWT_SECRET_KEY= '12345';
const generateToken = function(user){
var token = jwt.sign({ userId: user.user_id }, JWT_SECRET_KEY, { expiresIn: '10d'});
return token;
}

// module.exports= {generateToken}

const decodeToken = function(token){
    try {
        const decodedToken = jwt.verify(token, JWT_SECRET_KEY );
      return decodedToken.userId;
      } catch (error) {
        console.error(error);
        return null;
      }
}





module.exports= {generateToken, decodeToken}