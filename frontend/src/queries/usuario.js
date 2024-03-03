import { openGetQuery, openPostQuery } from "./config";


const getUser = (id) => {
  return openGetQuery("usuario/" + id);
}

const authUser = (id) => {
  return openGetQuery("usuario/" + id);
};

const loginUser =(body) =>{
  console.log(body);
  return openPostQuery("login", body);
}
export {
  authUser,
  getUser,
  loginUser
};