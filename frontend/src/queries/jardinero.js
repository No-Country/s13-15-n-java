import { openPostQuery } from "./config";



const registroJardinero = (body) => {
  console.log(body);
  return openPostQuery("api/v1/jardinero/registrar", body);
};

export {
  registroJardinero,
};