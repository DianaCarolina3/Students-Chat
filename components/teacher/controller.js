const store = require("./store");

const addTeacher = (educator, classroom, subject, info) => {
  return new Promise((resolve, reject) => {
    if (!educator || !classroom || !subject) {
      console.log("Inavlid data or internal error");
      return reject("[error] internal error");
    }

    const teacher = {
      educator: educator,
      classroom: classroom,
      subject: subject,
      info: info,
    };

    const newTeacher = store.add(teacher);
    resolve(newTeacher);
  });
};

const getTeacher = (id, name, subject) => {
  return store.get(id, name, subject);
};

const updateTeacher = (id, educator, classroom, subject) => {
  return new Promise((resolve, reject) => {
    if (!id || !educator || !classroom || !subject) {
      console.log("Data no found");
      return reject("No found");
    }

    const idTeacher = store.update(id, educator, classroom, subject);
    resolve(idTeacher);
  });
};

const removeTeacher = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      console.log("no data id");
      return reject("[error] no data");
    }

    const idTeacher = store.remove(id);
    resolve(idTeacher);
  });
};

module.exports = {
  addTeacher,
  getTeacher,
  updateTeacher,
  removeTeacher,
};
