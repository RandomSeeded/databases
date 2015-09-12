var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var Message = sequelize.define('Message', {
  // user_id: Sequelize.INTEGER,
  text: Sequelize.STRING,
  room_id: Sequelize.INTEGER,
});

var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Room = sequelize.define('Room', {
  roomname: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);
// Room.hasMany(Message, { as: "message_id"});
/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */


exports.sequelize = sequelize;
exports.Message = Message;
exports.User = User;
exports.Room = Room;



