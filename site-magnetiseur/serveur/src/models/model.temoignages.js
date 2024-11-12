import { model, Schema } from "mongoose";

const TemoignagesSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 20
  },
  city: {
    type: String,
    required: true,
    maxlength: 30
  },
  message: {
    type: String,
    required: true,
    trim: true
  }
});
export default model("Temoignages", TemoignagesSchema);
