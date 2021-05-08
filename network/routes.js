const express = require("express");
const messages = require("../components/messages/network");
const student = require("../components/student/network");
const chat = require("../components/chat/network");
const teacher = require("../components/teacher/network");

const routes = (server) => {
  server.use("/messages", messages);
  server.use("/student", student);
  server.use("/chat", chat);
  server.use("/teacher", teacher);
};

module.exports = routes;
