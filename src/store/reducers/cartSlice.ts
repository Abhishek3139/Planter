import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CartItems } from '../../modals/cartModals';
// import { Products } from '../../page/products';
interface IStateType {
  cart: Array<CartItems>;
  totalCartItems: number;
  cartTotal: number;
}
const initialState: IStateType = {
  cart: [],
  totalCartItems: 0,
  cartTotal: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartProduct: (state, action: PayloadAction<CartItems>) => {
      const productIndex = state.cart.findIndex((value) => value.id === action.payload.id);
      if (productIndex >= 0) {
        state.cart[productIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload };
        state.cart.push(tempProduct);
      }
      state.totalCartItems += 1;
      let cartTotal = 0;
      let cartItems = 0;
      state.cart.map((product) => {
        return (cartTotal += product.price * product.cartQuantity);
      });

      state.cart.map((product) => {
        return (cartItems += product.cartQuantity);
      });
      state.cartTotal = cartTotal;
      state.totalCartItems = cartItems;
    },

    // removeCartProduct: (state, action) => {
    //   //   state.cart.push(action.payload);
    // },
    updateProductQuantity: (state, action: PayloadAction<{ quantity: number; id: string }>) => {
      const productIndex = state.cart.findIndex((value) => value.id === action.payload.id);
      if (productIndex >= 0) {
        state.cart[productIndex].cartQuantity = action.payload.quantity;
      }
      // console.log(action.payload);
    },
  },
});

//action
export const cartActions = cartSlice.actions;
// selectors
export const selectCart = (state: RootState) => state.cart.cart;
export const selectTotalCartItems = (state: RootState) => state.cart.totalCartItems;
export const selectCartTotal = (state: RootState) => state.cart.cartTotal;

export const cartReducer = cartSlice.reducer;
