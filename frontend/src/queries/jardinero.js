import { openGetQuery } from "./config";


const getProfile = (id) => {
  return openGetQuery("jardineros/" + id);
};

export {
  getProfile
};
