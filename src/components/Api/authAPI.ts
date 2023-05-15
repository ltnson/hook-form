import { useMutation } from "react-query";
import logTimeApi from "./logTimeApi";

import { FormSignIn, FormSignUp, UserData } from "../types/types";
import TokenService from "../token-service/token";

export function useAddAccount() {
  return useMutation(
    async (payload: FormSignUp) => {
      const data = await logTimeApi.signup(payload);
      return data;
    },
    {
      onSuccess: (data: UserData) => {
        TokenService.setUser(data);
      },
    }
  );
}

export function useSignInAccount() {
  return useMutation(
    async (payload: FormSignIn) => {
      const data = await logTimeApi.signin(payload);
      return data;
    },
    {
      onSuccess: (data: UserData) => {
        TokenService.setUser(data);
      },
    }
  );
}

export function useLogOutAccount() {
  return useMutation(async (payload: null) => {
    const data = await logTimeApi.logout(payload);
    return data;
  });
}

export function useRefreshToken() {
  return useMutation(
    async (payload) => {
      const data = await logTimeApi.reToken(payload);
      return data;
    },
    {
      onSuccess: (data) => {
        TokenService.updateLocalToken(data.token);
      },
    }
  );
}
