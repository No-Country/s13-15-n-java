import { getQuery, openPostQuery } from "./config";

const getOffers = (params, token) => {
  return getQuery("api/v1/oferta"+ params, token);
};
const registroJardinero = (body) => {
  return openPostQuery("api/v1/jardinero/registrar", body);
}
export {
  getOffers,
  registroJardinero
};