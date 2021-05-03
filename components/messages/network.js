//va con la red
const express = require("express");
const controller = require("./controller");
const response = require("../../network/response");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
  destination: "public/files",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

router.post("/", upload.single("file"), (req, res) => {
  controller
    .addMessage(
      req.body.student,
      req.body.chat,
      req.body.message,
      req.body.file
    )
    .then((message) => {
      response.sucess(req, res, message, 200);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.get("/", (req, res) => {
  const filterMessage = req.query.student || null;
  controller
    .getMessage(filterMessage)
    .then((data) => {
      response.sucess(req, res, data, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error", 400, err);
    });
});

router.patch("/:id", (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.sucess(req, res, data, 201);
    })
    .catch((err) => {
      response.error(req, res, "Internal error", 500, err);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .removeMessage(req.params.id)
    .then(() => {
      response.sucess(req, res, `Message ${req.params.id} remove`, 200);
    })
    .catch((err) => {
      response.error(req, res, "Error no found", 400, err);
    });
});

module.exports = router;
