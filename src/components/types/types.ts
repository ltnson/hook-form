export type FormSignUp = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type FormSignIn = {
  email: string;
  password: string;
};

export type UserData = {
  admin: boolean;
  createdAt: string;
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  refreshToken: string;
  token: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type VoidFunction = () => void;
