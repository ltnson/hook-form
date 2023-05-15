import axios from "axios";
import TokenService from "../token-service/token";

const axiosClient = {
  get: (url: string, params?: any): any => {
    if (params) {
      return axios
        .get(`https://dummyjson.com/${url}/${params}`)
        .then((response) => response.data)
        .catch((err) => console.log(err));
    } else {
      return axios
        .get(`https://dummyjson.com/${url}`)
        .then((response) => response.data)
        .catch((err) => console.log(err));
    }
  },

  post: (url: string, payload: any): any => {
    return axios
      .post(`http://streaming.nexlesoft.com:4000/api/auth/${url}`, payload)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
  postWTK: (url: string, payload: any): any => {
    const token = TokenService.getLocalToken() || false;
    return axios
      .post(`http://streaming.nexlesoft.com:4000/api/auth/${url}`, payload, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },

  patch: (params: string, payload: any): any => {
    return axios
      .post(`http://localhost:5000/${params}`, payload)
      .then((response) => response)
      .catch((err) => console.log(err));
  },
  delete: (id: string): any => {
    return axios
      .delete(`http://localhost:5000/${id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  },
  postRefreshTK: (url: string, payload: any): any => {
    const refreshToken = TokenService.getLocalRefreshToken() || false;
    return axios
      .post(`http://streaming.nexlesoft.com:4000/api/auth/${url}`, payload, {
        headers: {
          Authorization: "Bearer " + refreshToken,
        },
      })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
};

export default axiosClient;
