var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('msg get request');
      models.messages.get(function(results) {
        res.status(200).send(JSON.stringify({results:results}));
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('msg post req');
      //put the data in the database
      models.messages.post(req.body);
      //send a response
      res.status(201).send("Message Received!")
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('user get req');
    },
    post: function (req, res) {
      console.log('user post req');
      models.users.post(req.body);
      res.status(201).send("User Received!");
    }
  }
};

