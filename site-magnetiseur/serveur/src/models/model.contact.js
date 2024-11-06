import { model, Schema } from "mongoose";
import validatePhoneNumber from "../utils/util.phoneNumber.js";
const ContactSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 20
    },
    name: {
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
      required: true,
      validate: {
        validator: function (v) {
          return validatePhoneNumber(v);
        },
        message: (props) =>
          `${props.value} n'est pas un numéro de téléphone valide.`
      }
    },
    message: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export default model("Contact", ContactSchema);
