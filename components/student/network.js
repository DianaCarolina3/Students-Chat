const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");
const router = express.Router();

router.post("/", (req, res) => {
  controller
    .addStudent(req.body.name, req.body.age)
    .then((data) => {
      response.sucess(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.get("/", (req, res) => {
  const filterStudent = req.query.id || null;
  const numberStudent = req.query.number || null;
  controller
    .getStudent(filterStudent, numberStudent)
    .then((data) => {
      response.sucess(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateName(req.params.id, req.body.name)
    .then(() => {
      response.sucess(req, res, `New name is ${req.body.name}`, 201);
    })
    .catch((err) => {
      response.error(req, res, "No found name", 500, err);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .removeStudent(req.params.id)
    .then(() => {
      response.sucess(req, res, `Student ${req.params.id} remove`, 200);
    })
    .then((err) => {
      response.error(req, res, "Invalid id", 400);
    });
});

module.exports = router;
