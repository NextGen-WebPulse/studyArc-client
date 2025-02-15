import { getLocalStorageItem, setLocalStorage } from "@/utils/localStorage";
import { createSlice } from "@reduxjs/toolkit";

interface IUserInitState {
  token: string | null;
}

const initialState: IUserInitState = {
  token: getLocalStorageItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      state.token = action.payload.accessToken;

      setLocalStorage("token", action.payload.accessToken);
    },

    clearCredential: (state) => {
      (state.token = null), window.localStorage.removeItem("token");
    },
  },
});

export const { setCredential } = authSlice.actions;
export default authSlice.reducer;
