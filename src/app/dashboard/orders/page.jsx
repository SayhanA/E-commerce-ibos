import React from "react";
import chair from "@/assets/images/char_rool_1.png";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";

const Orders = () => {
  const cartItems = [
    {
      id: 1,
      name: "Recliner Chair Steel",
      price: "€299.00",
      quantity: 1,
      image: chair,
    },
    {
      id: 2,
      name: "Gaming Chair",
      price: "€249.00",
      quantity: 1,
      image: chair,
    },
    {
      id: 3,
      name: "Timber Ride Padded",
      price: "€59.00",
      quantity: 1,
      image: chair,
    },
    {
      id: 4,
      name: "Isolated Wooden Rock",
      price: "€165.00",
      quantity: 1,
      image: chair,
    },
    {
      id: 5,
      name: "Colored Wooden Chair",
      price: "€165.00",
      quantity: 1,
      image: chair,
    },
  ];

  const subtotal = "€1071.00";
  const shipping = "Free";
  const total = "€1071.00";

  return (
    <div className="flex justify-between flex-wrap sm:p-8 mx-auto container">
      {/* Cart Items Section */}
      <div className="sm:w-3/5 w-full">
        <h2 className="text-2xl font-semibold mb-6">Overview of your order</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-5 pb-5 border-0 border-b flex-wrap"
            >
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <div className="flex items-center mt-2">
                    <button className="w-8 h-8 flex items-center justify-center border rounded-md">
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="w-8 h-8 flex items-center justify-center border rounded-md">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="cursor-pointer">
                  <RxCross2 className="ml-auto mb-6" />
                </div>
                <p className="font-semibold text-lg">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:w-2/5 sm:pl-6 w-full mb-10">
        <div className="">
          <h2 className="text-2xl font-semibold mb-6">Order Details</h2>
          <div className="bg-white shadow-md border rounded-lg p-6">
            <div className="mb-4 flex justify-between">
              <span>Subtotal</span>
              <span>{subtotal}</span>
            </div>
            <div className="mb-4 flex justify-between">
              <span>Shipping</span>
              <span>{shipping}</span>
            </div>
            <div className="mb-6 flex justify-between">
              <span>Estimated Tax</span>
              <span>€-</span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{total}</span>
            </div>
            <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
