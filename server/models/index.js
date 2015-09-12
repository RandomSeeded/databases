var db = require('../db');
var moment = require("moment");

module.exports = {
  messages: {
    get: function (callback) {
      //query //with restults: replace user_id with user name
      db.query(
        "select m.id as objectId, m.text, u.username, \
        m.room_id as roomname, m.created_at as createdAt \
        from messages m inner join \
        users u on m.user_id = u.id",
        function(err, results){
          if (err) console.log(err);
          else callback(results);
        });
        //do the callback
    }, // a function which produces all the messages
    post: function (message) {
      console.log("Adding Message to Database");
      db.query('select id from users where username = ?', [message.username], function(err, results) {
        if (err) { console.log(err); }
        if (results.length === 0) {
          db.query('insert into users set ?', {username: message.username }, function(err, result) {
            if (err) { console.log(err); }
            var newUserId = result.insertId;
            insertMessage(message, newUserId);
          });
        }
        else {
          var userId = results[0].id;
          insertMessage(message, userId);
        }
      });

      function insertMessage(message, userId) {
        db.query('insert into messages set ? ', {
          user_id: userId,
          room_id: 7,
          created_at: moment().format('YYYY-MM-DD hh:mm:ss'),
          text: message.text
        });
      }
    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user) {

    }
  }
};

