import axios from "axios";

export const getLocationList = (setLocationList) => {
  axios.get('https://stockholm.roomescapelive.se/rest/getLocationList')
  .then(response => {
    console.log(response);
    setLocationList(response.data.map(obj => ({
      value: obj.loc_domain,
      label: obj.loc_city,
      country: obj.loc_cuntry,
    })));
  })
  .catch(error => {
    console.log(error);
  })
};