import { postQuery, openPostQuery } from "./config";

const postOffer = (body, token) => {
  return postQuery("api/v1/oferta/publicar", body, token);
};
const registroPropietario = (body) => {
  return openPostQuery("api/v1/propietario/registrar", body);
}
export {
  postOffer,
  registroPropietario
};