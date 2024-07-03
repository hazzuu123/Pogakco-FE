import { ILogin, ISignup } from "@/models/auth.model";
import { requestHandler } from "./apiClient";

// auth
export const auth = () => {
  return requestHandler("post", "/api/auth");
};

// signup
export const signup = (formData: ISignup) => {
  return requestHandler("post", "/api/signup", formData);
};

// login
export const login = (formData: ILogin) => {
  return requestHandler("post", "/api/login", formData);
};

// logout
export const logout = () => {
  return requestHandler("post", "/api/logout");
};
