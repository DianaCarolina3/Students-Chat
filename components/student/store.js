const Model = require("./model");

const addStudent = (name) => {
  const studentName = new Model(name);
  return studentName.save();
};

const getStudent = async (filterStudent, numberStudent) => {
  filter = {};
  if (filterStudent) {
    filter = {
      _id: filterStudent,
    };
  } else if (numberStudent) {
    filter = {
      number: numberStudent,
    };
  }
  return Model.find(filter);
};

const updateName = async (id, newName) => {
  const idName = await Model.findById({
    _id: id,
  });
  idName.name = newName;

  const newNameStudent = idName.save();
  return newNameStudent;
};

const removeStudent = (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  add: addStudent,
  getList: getStudent,
  remove: removeStudent,
  update: updateName,
};
