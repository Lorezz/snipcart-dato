export default function ProductCard({ product }) {
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
    </div>
  );
}
