"use client";
import { useState } from "react";
import Modal from "./modal";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div key={product.id} className="group relative">
        <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div>
          <h3 className="mt-4 text-sm text-gray-700">
            <div className="font-bold">{product.name}</div>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {parseFloat(product.price).toFixed(2) + "€"}
          </p>
        </div>
      </div>
      <button
        className="snipcart-add-item  my-4 bg-black   text-white font-bold py-2 px-4 rounded"
        data-item-id={product.id}
        data-item-name={product.name}
        data-item-currency={product.currency}
        data-item-price={parseFloat(product.price)}
        data-item-url={product.url}
        data-item-description={product.description}
        data-item-image={product.image.url}
        data-item-custom1-name={product.customFields[0].name}
        data-item-custom1-options={product.customFields[0].options}
        data-item-custom1-required={true}
      >
        Add to cart
      </button>

      {product.customizable && (
        <button
          onClick={() => setOpen(true)}
          className=" my-4 bg-white   text-black font-bold py-2 px-4 rounded"
        >
          Personalizza
        </button>
      )}

      {
        <Modal open={open} setOpen={() => setOpen(!open)}>
          {product.settings.map((voice, index) => {
            return (
              <div
                key={product.id + "" + index}
                className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5"
              >
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
                >
                  {voice.title}
                </label>
                <div className="mt-2 sm:col-span-2 sm:mt-0">
                  <select
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {voice.options.split("|").map((option, index) => {
                      return (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            );
          })}
          <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
            >
              Note
            </label>
            <div className="mt-2 sm:col-span-2 sm:mt-0">
              <textarea
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </Modal>
      }
    </div>
  );
}
