import React from "react";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="max-w-2xl lg:w-full bg-white p-8 border rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center">Checkout</h2>
        <form action="#">
          <div className="mb-4">
            <label
              for="name"
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
              for="email"
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
              for="address"
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
              for="city"
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
              for="zip"
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
              for="card"
              className="block text-sm font-medium text-gray-600"
            >
              Card Number
            </label>
            <input
              type="text"
              id="card"
              name="card"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                for="expiry"
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
                for="cvv"
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
            <Link to="/delivery-success">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
            >

              Place Order
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
