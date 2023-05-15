import axiosClient from "./axiosClient";
import { FormSignIn, FormSignUp } from "../types/types";

const logTimeApi = {
  getAll(params?: string): Promise<any> {
    const url = "carts";
    return axiosClient.get(url, { params });
  },
  getById(id: string): Promise<any> {
    const url = `/member-logtime/${id}`;
    return axiosClient.get(url);
  },
  create(payload: any): Promise<any> {
    const url = `/member-logtime`;
    return axiosClient.post(url, payload);
  },
  edit(id: number, payload: any): Promise<any> {
    const url = `/member-logtime/${id}`;
    return axiosClient.patch(url, payload);
  },
  delete(id: string): Promise<any> {
    const url = `/member-logtime/${id}`;
    return axiosClient.delete(url);
  },
  signin(payload: FormSignIn): Promise<any> {
    const url = "signin";
    return axiosClient.post(url, payload);
  },
  signup(payload: FormSignUp): Promise<any> {
    const url = "signup";
    return axiosClient.post(url, payload);
  },
  logout(payload: null): Promise<any> {
    const url = "logout";
    return axiosClient.postWTK(url, payload);
  },
  reToken(payload: any): Promise<any> {
    const url = "/member-logtime/";
    return axiosClient.postRefreshTK(url, payload);
  },
};

export default logTimeApi;
