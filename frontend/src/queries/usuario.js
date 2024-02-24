import { openGetQuery, openPostQuery } from "./config";


const getUser = (id) => {
  return openGetQuery("usuario/" + id);
}

const authUser = (id) => {
  return openGetQuery("usuario/" + id);
};
const registerUser = (body) => {
  return openPostQuery("usuario", body);
};

export {
  authUser,
  registerUser,
  getUser
};