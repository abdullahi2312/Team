import { createContext, useContext, useEffect, useState } from "react";


const OrderContext = createContext();



export function OrderProvider({ children }) {


  const [orders, setOrders] = useState(() => {

    const savedOrders = localStorage.getItem("orders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : [];

  });






  // Save orders to localStorage

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);







  // Add new order

  const addOrder = (order) => {


    setOrders((prev) => [

      ...prev,

      order

    ]);


  };







  // Update order

  const updateOrder = (id, data) => {


    setOrders((prev) =>

      prev.map((order) =>

        order.id === id

        ? {

          ...order,

          ...data

        }

        : order

      )

    );


  };








  // Delete single order

  const deleteOrder = (id) => {


    setOrders((prev) =>

      prev.filter((order) =>

        order.id !== id

      )

    );


  };








  // Delete all orders

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

        deleteOrder,

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