import TemoignagesSchema from "../models/model.temoignages.js";

const createTemoignages = async (data) => {
  const newTemoignages = new TemoignagesSchema(data);
  return await newTemoignages.save();
};

const getAll = async () => {
  return TemoignagesSchema.find({}).select("-__v");
};

export { createTemoignages, getAll };
