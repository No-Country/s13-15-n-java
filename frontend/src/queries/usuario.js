import { openPostQuery, getQuery } from "./config";

const loginUser =(body) =>{
  return openPostQuery("login", body);
}

const getUser = (token) =>{
  return getQuery("api/v1/perfil/ver", token)
}
export {
  loginUser,
  getUser
};