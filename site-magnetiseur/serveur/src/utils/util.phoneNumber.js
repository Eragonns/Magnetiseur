import pkg from "google-libphonenumber";
const { PhoneNumberUtil } = pkg;

const phoneUtil = PhoneNumberUtil.getInstance();

const validatePhoneNumber = (number, countryCode = "FR") => {
  try {
    const phoneNumber = phoneUtil.parseAndKeepRawInput(number, countryCode);
    const isValid = phoneUtil.isValidNumber(phoneNumber);
    return isValid;
  } catch (error) {
    return false;
  }
};

export default validatePhoneNumber;
