import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};
export const NavbarSlice = createSlice({
  name: "navbar",
  initialState: initialState,
  reducers: {
    setIsOpen(state, { payload }) {
      state.isOpen = payload;
    },
  },
});

export const { setIsOpen } = NavbarSlice.actions;

export default NavbarSlice.reducer;
