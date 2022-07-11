import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ItemInterface, ShoppingCartState } from '../interfaces/interfaces';

const initialState: ShoppingCartState = {
  items: [],
};

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (
      state: ShoppingCartState,
      action: PayloadAction<{ item: ItemInterface; count: number }>
    ) => {
      if (
        state.items.find((item) => item.item._id === action.payload.item._id)
      ) {
        state.items = state.items.map((item) => {
          if (item.item._id === action.payload.item._id) {
            item.count++;
          }

          return item;
        });
      } else {
        state.items = state.items
          ? [...state.items, action.payload]
          : [action.payload];
      }
    },
    removeOneItem: (
      state: ShoppingCartState,
      action: PayloadAction<ItemInterface>
    ) => {
      if (
        state.items.find((item) => item.item._id === action.payload._id)
          ?.count ||
        0 > 1
      ) {
        state.items = state.items.map((item) => {
          if (item.item._id === action.payload._id) {
            item.count--;
          }

          return item;
        });
      }
    },
    removeFromCart: (
      state: ShoppingCartState,
      action: PayloadAction<ItemInterface>
    ) => {
      if (state.items.find((item) => item.item._id === action.payload._id)) {
        state.items = state.items.filter(
          (item) => item.item._id !== action.payload._id
        );
      }
    },
  },
});

export const { addToCart, removeOneItem, removeFromCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
