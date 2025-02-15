export type TRegisterInputs = {
  id: number;
  name: "name" | "email" | "password" | "phone" | "userName" | "gender";
  type: "text" | "email" | "password" | "select";
  placeholder: string;
};

export type TLoginInputs = {
  id: number;
  name: "email" | "password";
  type: "email" | "password";
  placeholder: string;
};

export const registerInputs: TRegisterInputs[] = [
  { id: 1, name: "name", type: "text", placeholder: "Full Name" },
  { id: 2, name: "email", type: "email", placeholder: "Email" },
  { id: 3, name: "password", type: "password", placeholder: "Password" },
  { id: 4, name: "gender", type: "select", placeholder: "gender" },
  { id: 5, name: "userName", type: "text", placeholder: "Username" },
  { id: 6, name: "phone", type: "text", placeholder: "Phone Number" },
];

export const loginInputs: TLoginInputs[] = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  { id: 2, name: "password", type: "password", placeholder: "Password" },
];
