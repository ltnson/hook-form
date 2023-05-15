import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { FormSignIn } from "../types/types";
import { useSignInAccount } from "../Api/authAPI";
import axios from "axios";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Checkbox } from "@mui/material";
import InputTextField from "./FormController/InputTextField";
import FooterForm from "./FormController/footerForm/FooterForm";

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Email is invalid")
    .matches(/^\S*$/, "Can't contain spaces"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^\S*$/, "Can't contain spaces")
    .min(6, "Password is too short")
    .max(18, "Password is too long"),
});

const SignIn = ({ onCheckLogin }: { onCheckLogin: VoidFunction }) => {
  const navigate = useNavigate();

  const methods = useForm<FormSignIn>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const { control, handleSubmit, formState } = methods;

  const { mutateAsync, error } = useSignInAccount();
  const onSubmit = (dataForm: FormSignIn) => {
    mutateAsync(dataForm).then(() => onCheckLogin());
  };

  const errMess = useMemo(() => {
    if (error) {
      if (axios.isAxiosError(error)) {
        return error?.response?.data.errors.message[0];
      } else {
        return error;
      }
    }
  }, [error]);

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col items-center gap-4 m-10 justify-center h-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-xl text-black ">
            Welcome to ReactJS Test Interview! 👋🏻
          </h1>
          <p>Please sign-in to your account and start the adventure</p>
        </div>
        <InputTextField
          name="email"
          label="Email"
          placeholder="Enter Email"
          control={control}
        />
        <InputTextField
          name="password"
          label="Password"
          placeholder="Enter password"
          control={control}
        />
        <div className="flex items-center  w-full justify-start">
          <Checkbox />
          <p>Remember me ?</p>
        </div>
        <p className="text-red-500 font-simebold">{errMess}</p>
        <Button fullWidth type="submit" disabled={!formState.isValid}>
          Login
        </Button>
        <p className="text-red-500">{}</p>
        <div>
          <p className="">
            New on our platform?{" "}
            <a
              href=""
              className="text-violet-400"
              onClick={() => navigate("/sign-up")}
            >
              {" "}
              Create an account
            </a>
          </p>
        </div>
        <FooterForm />
      </form>
    </FormProvider>
  );
};

export default SignIn;
