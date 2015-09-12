CREATE DATABASE chat;

USE chat

CREATE TABLE messages (
  id int AUTO_INCREMENT,
  text varchar(255),
  user_id int,
  room_id int,
  created_at datetime,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id int auto_increment,
  username varchar(24),
  primary key (id)
);

CREATE TABLE rooms (
  id int auto_increment,
  roomname varchar(24),
  primary key (id)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

