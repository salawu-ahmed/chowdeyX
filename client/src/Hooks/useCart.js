import React, { createContext, useContext, useEffect, useState } from "react";
import { sample_foods } from "../data";

const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    sample_foods
      .slice(1, 4)
      .map((food) => ({ food, quantity: 1, price: food.price }))
  );
  const [totalPrice, setTotalPrice] = useState(40);
  const [totalCount, setTotalCount] = useState(3);

  useEffect(() => {
    const totalPrice = sum(cartItems.map(item => item.price))
    const totalCount = sum(cartItems.map(item => item.quantity))
    setTotalCount(totalCount)
    setTotalPrice(totalPrice)
  }, [cartItems])
  
  const sum = items => {
    return items.reduce((prevValue, curValue) => prevValue + curValue, 0)
  }

  const removeFromCart = foodId => {
    const filteredCartItems = cartItems.filter(item => item.food.id !== foodId)
    setCartItems(filteredCartItems)
  }

  const changeQuantity = (cartItem, newQuantity) => {
    const { food } = cartItem 
    const changedCartItem = {
      ...cartItem,
      quantity: newQuantity,
      price: food.price * newQuantity
    }
    setCartItems(cartItems.map(item => (item.food.id === food.id ? changedCartItem : item)))
  }

  const addToCart = food => {
    const cartItem = cartItems.find(item => item.food.id === food.id)
    if (cartItem) {
      changeQuantity(cartItem, cartItem.quantity + 1)
    } else {
      setCartItems([...cartItems, {food, quantity: 1, price: food.price}])
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart: { items: cartItems, totalPrice, totalCount },
        removeFromCart,
        changeQuantity,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext)