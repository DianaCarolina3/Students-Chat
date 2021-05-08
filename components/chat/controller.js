const store = require("./store");

const addChat = (students, teacher) => {
  return new Promise((resolve, reject) => {
    if (!students || !Array.isArray(students)) {
      console.error("No data or no found");
      return reject("Invalid data or data no found");
    }
    const chatstudents = {
      teacher: teacher,
      students: students,
    };
    const chat = store.add(chatstudents);
    resolve(chat);
  });
};

const getChat = (ID) => {
  return new Promise((resolve, reject) => {
    if (!ID) {
      console.error("No data or no found");
      return reject("Data no found");
    }
    const id = store.getList(ID);
    resolve(id);
  });
};

const removeChat = (idChat) => {
  return new Promise((resolve, reject) => {
    if (!idChat) {
      console.error("No data or no found");
      return reject("Data no found");
    }
    const id = store.remove(idChat);
    resolve(id);
  });
};

module.exports = {
  addChat,
  getChat,
  removeChat,
};
