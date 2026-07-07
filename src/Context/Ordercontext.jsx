import { createContext, useContext, useEffect, useState } from "react";

const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  const updateOrder = (id, data) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, ...data } : order
      )
    );
  };

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem("orders");
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrder,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}