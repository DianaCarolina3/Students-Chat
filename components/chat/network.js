const express = require("express");
const router = express.Router();
const controller = require("./controller");
const response = require("../../network/response");

router.post("/", (req, res) => {
  controller
    .addChat(req.body.students)
    .then((data) => {
      response.sucess(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, `Invalid data`, 400, err);
    });
});

router.get("/:studentID", (req, res) => {
  const filterIdStudent = req.params.studentID;
  controller
    .getChat(filterIdStudent)
    .then((data) => {
      response.sucess(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, `Id no found`, 400, err);
    });
});

router.delete("/:idChat", (req, res) => {
  controller
    .removeChat(req.params.idChat)
    .then(() => {
      response.sucess(req, res, `Chat: ${req.params.idChat} remove`, 200);
    })
    .catch((err) => {
      response.error(req, res, `Internal error`, 500, err);
    });
});

module.exports = router;
