const jwt = require('jsonwebtoken');
const config = require('config');

const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      role: user.role
    },
    config.get('jwtSecret'),
    { expiresIn: '1h' }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, config.get('jwtSecret'));
};

module.exports = {
  generateToken,
  verifyToken
};