import axios from "axios";

export const sendEmail = (location, language, fieldValues) => {
  axios.get(`https://cors-anywhere.herokuapp.com/${location}/rest/sendZodiacRiddleGameEmail`, {
    headers: {
      'NAME': fieldValues.name,
      'EMAIL': fieldValues.email,
      'LANG': language,
    }
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  })
};