const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");
const router = express.Router();

router.post("/", (req, res) => {
  controller
    .addTeacher(
      req.body.educator,
      req.body.classroom,
      req.body.subject,
      req.body.info
    )
    .then((data) => {
      response.sucess(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.get("/", (req, res) => {
  const IdTeacher = req.query.id || null;
  const nameTeacher = req.query.educator || null;
  const subjectTeacher = req.query.subject || null;
  controller
    .getTeacher(IdTeacher, nameTeacher, subjectTeacher)
    .then((data) => {
      response.sucess(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Invalid data", 400, err);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateTeacher(
      req.params.id,
      req.body.educator,
      req.body.classroom,
      req.body.subject,
      req.body.info
    )
    .then((data) => {
      response.sucess(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, "Internal error", 500, error);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .removeTeacher(req.params.id)
    .then(() => {
      response.sucess(req, res, `Teacher ${req.params.id} remove`, 200);
    })
    .catch((err) => {
      response.error(req, res, "Data no found", 400, err);
    });
});

module.exports = router;
