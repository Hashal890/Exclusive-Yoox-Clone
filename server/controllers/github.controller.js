const axios = require("axios");

const getGithubData = (code) => {
  return axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}&code=${code}`,
      {},
      { headers: { accept: "application/json" } }
    )
    .then((response) => {
      let access_token = response.data.access_token;
      return axios
        .get("https://api.github.com/user", {
          headers: {
            Authorization: "token " + access_token,
          },
        })
        .then((response) => {
          return response.data;
        });
    });
};

module.exports = { getGithubData };
