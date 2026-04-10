function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Category Badge */}
        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full w-fit mb-2">
          {product.category}
        </span>

        {/* Name */}
        <h3 className="text-gray-800 font-semibold text-lg mb-1">
          {product.name}
        </h3>

        {/* Rating */}
        <p className="text-yellow-500 text-sm mb-2">
          {"★".repeat(Math.floor(product.rating))} 
          <span className="text-gray-400 ml-1">({product.rating})</span>
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-gray-900 font-bold text-xl">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;