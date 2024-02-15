import { openGetQuery, openPostQuery } from "./config";


const authUser = (id) => {
  return openGetQuery("usuario/" + id);
};
const registerUser = (body) => {
  return openPostQuery("usuario", body);
};

export {
  authUser,
  registerUser
};