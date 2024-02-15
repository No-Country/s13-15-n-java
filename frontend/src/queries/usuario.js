import { openGetQuery } from "./config";


const authUser = (id) => {
  return openGetQuery("usuario/" + id);
};

export {
  authUser
};