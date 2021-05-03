const Model = require("./model");

const addChat = (chatStudents) => {
  const chat = new Model(chatStudents);
  return chat.save();
};

const getChat = (id) => {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if (id) {
      filter = {
        students: id,
      };
    }
    await Model.find(filter)
      .populate("students")
      .exec((err, populated) => {
        if (err) {
          return reject(err);
        }
        resolve(populated);
      });
  });
};

const removeChat = (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  add: addChat,
  getList: getChat,
  remove: removeChat,
};
