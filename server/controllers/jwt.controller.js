const jwt = require("jsonwebtoken");

const getRefreshToken = (userid, name, email) => {
  try {
    let refreshToken = jwt.sign({ userid, name, email }, process.env.REFRESH_TOKEN_SECRET_KEY, {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    });
    return refreshToken;
  } catch (error) {
    throw new Error(error);
  }
};

const getAccessToken = (refreshToken) => {
  try {
    let tokenData = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET_KEY);
    let accessToken = jwt.sign(
      { userid: tokenData.userid, name: tokenData.name, email: tokenData.email },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    return accessToken;
  } catch (error) {
    throw new Error(error);
  }
};

const getTokens = (userid, name, email) => {
  const refreshToken = getRefreshToken(userid, name, email);
  const accessToken = getAccessToken(refreshToken);
  return { accessToken, refreshToken };
};

const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getTokens, getAccessToken, getRefreshToken, verifyAccessToken };
