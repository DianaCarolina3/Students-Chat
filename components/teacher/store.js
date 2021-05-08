const Model = require("./model");

const addTeacher = (teacher) => {
  const newTeacher = new Model(teacher);
  return newTeacher.save();
};

const getTeacher = async (id, name, subject) => {
  filter = {};

  if (id) {
    filter = {
      _id: id,
    };
  } else if (name) {
    filter = {
      educator: name,
    };
  } else if (subject) {
    filter = {
      subject: subject,
    };
  }

  return await Model.find(filter);
};

const updateTeacher = async (id, educator, classroom, subject, info) => {
  const newInfo = await Model.findById({
    _id: id,
  });
  if (educator || classroom || subject || info) {
    newInfo.educator = educator;
    newInfo.classroom = classroom;
    newInfo.subject = subject;
    newIfo.info = info;
  }
  const infoTeacher = newInfo.save();
  return infoTeacher;
};

const removeTeacher = async (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  add: addTeacher,
  get: getTeacher,
  update: updateTeacher,
  remove: removeTeacher,
};
