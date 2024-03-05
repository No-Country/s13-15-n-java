import { postQuery } from "./config";

const postOffer = (body, token) => {
  console.log(body);
  return postQuery("api/v1/oferta/publicar", body, token);
};

export {
  postOffer,
};