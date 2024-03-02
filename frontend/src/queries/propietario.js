import { openPostQuery } from "./config";



const registroPropietario = (body) => {
  console.log(body);
  return openPostQuery("api/v1/propietario/registrar", body);
};

export {
  registroPropietario,
};