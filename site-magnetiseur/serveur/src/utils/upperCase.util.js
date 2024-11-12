const formatToUpperCaseWithHyphens = (str) => {
  return str
    .split("-")
    .map((part) => part.toLocaleUpperCase("fr-FR"))
    .join("-");
};

export default formatToUpperCaseWithHyphens;
