import { createContext, useContext, useState } from "react";

// 1. Create the shared "room"
const CartContext = createContext();

// 2. The Provider wraps your whole app and holds the state
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add item or increase quantity if already in cart
  function addToCart(product) {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // Remove item entirely from cart
  function removeFromCart(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  // Update quantity directly
  function updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

// 3. Custom hook so any component can easily use the cart
export function useCart() {
  return useContext(CartContext);
}