import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAddAccount } from "../Api/authAPI";
import { FormSignUp, VoidFunction } from "../types/types";
import axios from "axios";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button, Checkbox } from "@mui/material";
import InputTextField from "./FormController/InputTextField";
import FooterForm from "./FormController/footerForm/FooterForm";

const schema = yup.object({
  firstName: yup
    .string()
    .min(2, "Fist Name is required")
    .required("Fist Name is required"),
  lastName: yup
    .string()
    .min(2, "Fist Name is required")
    .required("Last Name is required"),
  email: yup
    .string()
    .email("Email is invalid")
    .matches(/^\S*$/, "Can't contain spaces")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(/^\S*$/, "Can't contain spaces")
    .min(6, "Password is too short")
    .max(18, "Password is too long"),
});

const SignUp = ({ onCheckLogin }: { onCheckLogin: VoidFunction }) => {
  const navigate = useNavigate();
  const [checkAgree, setCheckAgree] = useState(false);

  const methods = useForm<FormSignUp>({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const { control, handleSubmit, formState } = methods;

  const { mutateAsync, error } = useAddAccount();
  const onSubmit = (dataForm: FormSignUp) => {
    if (checkAgree) {
      mutateAsync(dataForm).then(() => onCheckLogin());
    } else {
      alert("please read the privacy policy & terms and agree");
    }
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
        className="flex flex-col items-center gap-4 mx-10 my-6 h-screen"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-xl text-black ">Adventure starts here</h1>
          <p>Make your app management easy and fun!</p>
        </div>
        <InputTextField
          name="firstName"
          label="First Name"
          placeholder="Enter first name"
          control={control}
        ></InputTextField>
        <InputTextField
          name="lastName"
          label="Last Name"
          placeholder="Enter last name"
          control={control}
        ></InputTextField>
        <InputTextField
          name="email"
          label="Email"
          placeholder="Enter Email"
          control={control}
        ></InputTextField>
        <InputTextField
          name="password"
          label="Password "
          placeholder="Enter password"
          control={control}
        ></InputTextField>
        <div className="flex items-center w-full justify-start">
          <Checkbox
            style={{ padding: "0 8px 0 0", color: "rgb(203 213 225)" }}
            onChange={(e) => setCheckAgree(e.target.checked)}
          />
          <p>
            i agree to{" "}
            <a href="" className="text-violet-400">
              privacy policy & terms
            </a>
          </p>
        </div>

        <p className="text-red-500 font-simebold">{errMess}</p>
        <Button
          fullWidth
          style={{ backgroundColor: "rgb(139 92 246)", color: "white" }}
          type="submit"
          disabled={!formState.isValid}
        >
          Submit
        </Button>
        <div>
          <p className="">
            Already have an account?{" "}
            <a
              href=""
              className="text-violet-400"
              onClick={() => navigate("/sign-in")}
            >
              {" "}
              Sign in instead
            </a>
          </p>
        </div>
        <FooterForm />
      </form>
    </FormProvider>
  );
};

export default SignUp;
