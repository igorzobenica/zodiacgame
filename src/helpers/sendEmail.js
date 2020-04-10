import axios from "axios";

export const sendEmail = (location, language, email) => {
  axios.get(`${location}/rest/sendZodiacRiddleGameEmail`, {
    headers: {
      'EMAIL': email,
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