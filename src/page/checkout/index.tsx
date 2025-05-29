import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe('your-publishable-key-here'); // Replace with your key

const Checkout = () => {
//   const handleCheckout = async () => {
//     // const stripe = await stripePromise;

//     const response = await fetch('/api/create-checkout-session', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ items: cartItems }),
//     });

//     const session = await response.json();

//     await stripe.redirectToCheckout({ sessionId: session.id });
//   };
const total=1000
const cartItems=[ {
  id: 'plant001',
  name: 'Monstera Deliciosa',
  image: 'https://images.unsplash.com/photo-1616627986307-cb3d7e7e703b', // or any placeholder
  qty: 1,
  price: 2500, // in cents ($25.00)
}]
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Checkout</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
              <div>
                <h2 className="font-semibold text-lg text-green-800">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.qty} × ${item.price}</p>
              </div>
            </div>
            <span className="text-green-700 font-semibold">${(item.qty * item.price).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-xl font-bold text-green-900">
        Total: ${total.toFixed(2)}
      </div>

      <button
        // onClick={handleCheckout}
        className="mt-6 w-full bg-green-600 text-white py-3 px-6 rounded-xl hover:bg-green-700 transition shadow-md"
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default Checkout;
