import { createContext, useContext, useEffect, useState } from "react";


const OrderContext = createContext();



export function OrderProvider({ children }) {


  const [orders, setOrders] = useState(() => {

    try {

      const savedOrders = localStorage.getItem("orders");

      return savedOrders
        ? JSON.parse(savedOrders)
        : [];

    } catch(error){

      console.log("Orders loading error:", error);

      return [];

    }

  });






  // Save orders automatically

  useEffect(()=>{


    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );


  },[orders]);








  // Add New Order

  const addOrder = (order)=>{


    const newOrder = {

      id:
      order.id ||
      Date.now(),

      status:
      order.status ||
      "Pending",

      payment:
      order.payment ||
      "Not Received",

      ...order

    };



    setOrders((prev)=>[

      ...prev,

      newOrder

    ]);


  };









  // Update Order Information

  const updateOrder = (id,data)=>{


    setOrders((prev)=>

      prev.map((order)=>

        order.id === id

        ?

        {

          ...order,

          ...data

        }

        :

        order

      )

    );


  };









  // Update Payment Only

  const updatePaymentStatus = (id,payment)=>{


    setOrders((prev)=>

      prev.map((order)=>

        order.id === id

        ?

        {

          ...order,

          payment

        }

        :

        order

      )

    );


  };









  // Delete One Order

  const deleteOrder = (id)=>{


    setOrders((prev)=>

      prev.filter((order)=>

        order.id !== id

      )

    );


  };









  // Delete All Orders

  const clearOrders = ()=>{


    setOrders([]);

    localStorage.removeItem("orders");


  };









  return (

    <OrderContext.Provider

      value={{

        orders,

        addOrder,

        updateOrder,

        updatePaymentStatus,

        deleteOrder,

        clearOrders

      }}

    >


      {children}


    </OrderContext.Provider>


  );


}









export function useOrders(){


  const context = useContext(OrderContext);


  if(!context){

    throw new Error(
      "useOrders must be used inside OrderProvider"
    );

  }


  return context;


}