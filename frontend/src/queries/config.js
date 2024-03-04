import axios from "axios";

const queryPath = process.env.NEXT_PUBLIC_QUERIES;

const getQuery = (direction, token) => {
  
  return axios.get(`${queryPath}/${direction}`, {
    headers: {
      Authorization: token,
    },
  });
};

const openGetQuery = (direction) => {
  const res = axios.get(`${queryPath}/${direction}`);
  return res;
};

const postQuery = (direction, body, token) => {
  try {
    if (token) {
      return axios.post(`${queryPath}/${direction}`, body, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    } else {
      return axios.post(`${queryPath}/${direction}`, body);
    }
  } catch (error) {
    console.log("ERROR EN EL QUERY", error);
  }
};


const openPostQuery = (path, body) => {
  return axios.post(`${queryPath}/${path}`, body);
};

const patchQuery = (direction, body, token) => {
  return axios.patch(`${queryPath}/${direction}`, body, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const openPatchQuery = (direction, body) => {
  return axios.patch(`${queryPath}/${direction}`, body);
};

const putQuery = (direction, body) => {
  return axios.put(`${queryPath}/${direction}`, body);
};


const deleteQuery = (direction, token) => {
  return axios.delete(`${queryPath}/${direction}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};



export {
  getQuery,
  postQuery,
  patchQuery,
  putQuery,
  deleteQuery,
  openGetQuery,
  openPostQuery,
  openPatchQuery,
};
