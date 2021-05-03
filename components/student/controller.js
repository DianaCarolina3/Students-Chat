const store = require("./store");

const addStudent = (name) => {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error("No data");
      return reject("Error no data");
    }

    const student = {
      number: Math.floor(Math.random() * 100),
      name: name,
    };
    const newStudent = store.add(student);
    resolve(newStudent);
  });
};

const getStudent = (filterStudent, numberStudent) => {
  return store.getList(filterStudent, numberStudent);
};

const updateName = (id, newName) => {
  return new Promise((resolve, reject) => {
    if (!id || !newName) {
      console.error("No data");
      return reject("Error no data");
    }

    const resultUpdate = store.update(id, newName);
    resolve(resultUpdate);
  });
};

const removeStudent = (id) => {
  return new Promise((resolve, reject) => {
    if (!id) {
      console.error("Invalid data");
      return reject("Id no found");
    }
    const idStudent = store.remove(id);
    resolve(idStudent);
  });
};

module.exports = {
  addStudent,
  getStudent,
  updateName,
  removeStudent,
};
