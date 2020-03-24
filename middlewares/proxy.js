const axios = require("axios");

const accessGroup = require("../config/accessGroup")();

module.exports = () => {
  return {
    autenticacao: function(req, res, next) {
      axios
        .get("http://localhost:3009/verify", {
          Authorization: req.headers["authorization"]
        })
        .then(response => {
          console.log("then");
          //   console.log(response.data.url);
          //   console.log(response.data.explanation);
          next();
        })
        .catch(error => {
          console.log("catch");
          //   console.log(error);
          return res(500).json({ message: "Server error" });
        });
    }
  };
};
