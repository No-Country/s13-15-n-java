import { openPostQuery } from "./config";



const registroPropietario = (body) => {
  console.log(body);
  return openPostQuery("api/vi/propietario/registrar", body);
};

export {
  registroPropietario,
};