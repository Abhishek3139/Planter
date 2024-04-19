import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CartItems } from '../../modals/cartModals';
import { GetStripeUrl } from '../thunkApi/stripeApi';
// import { Products } from '../../page/products';
interface IStateType {
  cart: Array<CartItems>;
  totalCartItems: number;
  cartTotal: number;
  isLoading: boolean;
  stripeUrlData: any;
}
const initialState: IStateType = {
  cart: [],
  totalCartItems: 0,
  cartTotal: 0,
  isLoading: false,
  stripeUrlData: {},
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

    removeCartProduct: (
      state,
      action: PayloadAction<{ id: string; cartQuantity: number; price: number }>,
    ) => {
      state.totalCartItems = state.totalCartItems - action.payload.cartQuantity;
      state.cartTotal = state.cartTotal - action.payload.price * action.payload.cartQuantity;
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    updateProductQuantity: (
      state,
      action: PayloadAction<{
        quantity: number;
        id: string;
        totalCartItems?: number;
        cartTotal?: number;
      }>,
    ) => {
      const productIndex = state.cart.findIndex((value) => value.id === action.payload.id);
      if (productIndex >= 0) {
        state.cart[productIndex].cartQuantity = action.payload.quantity;
        if (action.payload.totalCartItems && action.payload.cartTotal) {
          state.totalCartItems = action.payload.totalCartItems;
          state.cartTotal = action.payload.cartTotal;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetStripeUrl.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetStripeUrl.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stripeUrlData = action.payload;
      }),
      builder.addCase(GetStripeUrl.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

//action
export const cartActions = cartSlice.actions;
// selectors
export const selectCart = (state: RootState) => state.cart.cart;
export const selectTotalCartItems = (state: RootState) => state.cart.totalCartItems;
export const selectCartTotal = (state: RootState) => state.cart.cartTotal;
export const selectStripeData = (state: RootState) => state.cart.stripeUrlData;

export const cartReducer = cartSlice.reducer;
