import { createSlice } from "@reduxjs/toolkit";
interface IUserState {
  user: object;
  token: string;
}

const initialState: IUserState = {
  user: {},
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
