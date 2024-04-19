export interface CartItems {
  price: number;
  image: string;
  name: string;
  id: string;
  // quantity?: number;
  cartQuantity: number;
}

export interface StripePayload {
  product: {
    id: string;
    price: number;
    name: string;
    image: string;
    cartQuantity: number;
  }[];
}
