// //controla la logica
const store = require("./store");
const config = require("../../config");
const { socket } = require("../../socket");

const addMessage = (Student, chat, message, teacher, file) => {
  return new Promise((resolve, reject) => {
    if (!Student || !chat || !message || !teacher) {
      console.error("[Error] no found student or message");
      return reject("Invalid data");
    }

    //rute no send to file but if is save
    let fileUrl = "";
    if (file) {
      fileUrl = `${config.host}${config.port}/${config.public_route}/${config.files_route}/${file.filename}`;
    }

    const fullMessage = {
      chat: chat,
      teacher: teacher,
      student: Student,
      message: message,
      date: new Date(),
      file: fileUrl,
    };

    store.add(fullMessage);

    socket.io.emit("message", fullMessage);

    resolve(fullMessage);
  });
};

const getMessage = (filterMessage) => {
  return new Promise((resolve) => {
    return resolve(store.getList(filterMessage));
  });
};

const updateMessage = (id, message) => {
  return new Promise((resolve, reject) => {
    if (!id || !message) {
      console.error("[Error] no found id or message");
      return reject("[Invalid data]");
    }

    const resultUpdate = store.update(id, message);
    resolve(resultUpdate);
  });
};

const removeMessage = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      console.error("[Error] id no found or invalid data");
      return reject("[No found]");
    }

    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  removeMessage,
};
