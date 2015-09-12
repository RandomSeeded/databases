// var db = require('../db');
var sequelize = require('../initSeq.js');
var Room = sequelize.Room;
var User = sequelize.User;
var Message = sequelize.Message;
var moment = require("moment");

module.exports = {
  messages: {
    get: function (callback) {
      Message.findAll(
        {include: [{model: User}]}
      ).then(function(messages){
        var mapped = messages.map(function(message) {
          message.dataValues.objectId = message.dataValues.id;
          message.dataValues.username = message.dataValues.User.username;
          return message.dataValues;
        });
        callback(mapped);
      });
    },
    post: function (message) {
      console.log("Adding Message to Database");
      
      // get userid
      User.findOrCreate({where: {username: message.username}})
        .spread(function(user, wasCreated) {
          var uid = user.get('id');
          console.log('UID:',uid);

          // insert message
          Message.build({UserId: uid, text: message.text, room_id: 7}).save().then(function() {
            console.log('message saved');
          });
        });
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {

    }
  }
};

