import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  cart: [] as any,
};

const globalState = createSlice({
  name: "toogle",
  initialState,
  reducers: {
    changeToggle: (state, { payload }) => {
      state.toggle = payload;
    },
    addToCart: (state, { payload }) => {
      const check = state.cart.findIndex((el: any) => el.id === payload.id);
      if (check >= 0) {
        state.cart[check].qty += 1;
      } else {
        state.cart.push(...payload, qty: 1);
      };
    },
  },
});

export const { changeToggle, addToCart } = globalState.actions;

export default globalState.reducer;
