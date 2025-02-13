export type TRegisterInputs = {
  id: number;
  name: "name" | "email" | "password" | "phone" | "userName" | "gender";
  type: string;
  placeholder: string;
};

export const registerInputs: TRegisterInputs[] = [
  { id: 1, name: "name", type: "text", placeholder: "Full Name" },
  { id: 2, name: "email", type: "text", placeholder: "Email" },
  { id: 3, name: "password", type: "password", placeholder: "Password" },
  { id: 4, name: "gender", type: "select", placeholder: "gender" },
  { id: 5, name: "userName", type: "text", placeholder: "Username" },
  { id: 6, name: "phone", type: "text", placeholder: "Phone Number" },
];
