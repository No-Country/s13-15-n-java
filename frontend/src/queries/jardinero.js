import { openPostQuery } from "./config";



const registroJardinero = (body) => {
  console.log(body);
  return openPostQuery("api/vi/jardinero/registrar", body);
};

export {
  registroJardinero,
};