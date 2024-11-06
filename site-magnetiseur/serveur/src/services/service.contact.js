import Contact from "../models/model.contact.js";

const create = (data) => {
  return Contact(data).save();
};

export { create };
