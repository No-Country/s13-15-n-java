import { getQuery } from "./config";

const getOffers = (params, token) => {
  return getQuery("api/v1/oferta"+ params, token);
};

export {
  getOffers,
};