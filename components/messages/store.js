const Model = require("./model");

const addMessage = (message) => {
  const theMessage = new Model(message);
  theMessage.save(message);
};

const getMessage = (filterMessage) => {
  return new Promise((resolve, reject) => {
    filter = {};
    if (filterMessage) {
      filter = {
        chat: filterMessage,
        // student: filterMessage,
      };
    }

    Model.find(filter)
      //coneccion de messages y student collections
      .populate("student")
      .exec((err, populated) => {
        if (err) {
          return reject(err);
        }
        resolve(populated);
      });
  });
};

const updateMessage = async (id, newMessage) => {
  const idMessage = await Model.findById({
    _id: id,
  });
  idMessage.message = newMessage;

  const fullMessage = await idMessage.save();
  return fullMessage;
};

const removeMessage = (id) => {
  return Model.deleteOne({
    _id: id,
  });
};

module.exports = {
  add: addMessage,
  getList: getMessage,
  update: updateMessage,
  remove: removeMessage,
};
