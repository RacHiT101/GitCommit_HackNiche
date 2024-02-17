import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Simulate a successful payment for demo purposes
    // In a real scenario, you would handle this on your server
    setPaymentError(null);

    // Display a success message (for demo purposes)
    alert('Payment Successful!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-600"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-600"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-600"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="zip"
          className="block text-sm font-medium text-gray-600"
        >
          ZIP Code
        </label>
        <input
          type="text"
          id="zip"
          name="zip"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="card"
          className="block text-sm font-medium text-gray-600"
        >
          Card Number
        </label>
        <CardElement
          id="card"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4 flex">
        <div className="w-1/2 mr-2">
          <label
            htmlFor="expiry"
            className="block text-sm font-medium text-gray-600"
          >
            Expiry Date
          </label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            placeholder="MM/YY"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-600"
          >
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
        >
          Place Order
        </button>
      </div>

      {paymentError && <div className="text-red-500 mt-4">{paymentError}</div>}
    </form>
  );
};

export default CheckoutForm;
