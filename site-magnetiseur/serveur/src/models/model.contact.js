import { model, Schema } from "mongoose";

const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 20
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 20
    },

    email: {
      type: String,
      required: [true, "Veuillez fournir un email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Veuillez fournir un email valide"
      ]
    },
    number: {
      type: String,
      required: false
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    createdAt: { type: Date, default: Date.now }
  },
  { timestamps: true }
);

export default model("Contact", ContactSchema);
