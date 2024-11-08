import ContactSchema from "../models/model.contact.js";

const createContact = async (data) => {
  const newContact = new ContactSchema(data);
  return await newContact.save();
};
export { createContact };
