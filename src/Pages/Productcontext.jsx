import { createContext, useContext, useState, useEffect } from "react";
import Data from "../Xoogta/Data";

const ProductContext = createContext();

export function ProductProvider({ children }) {

  const [products, setProducts] = useState(() => {

    const saved = localStorage.getItem("products");

    return saved ? JSON.parse(saved) : Data;

  });


  useEffect(() => {

    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );

  }, [products]);




  const addProduct = (product) => {

    setProducts((prev) => [

      ...prev,

      {
        id: Date.now(),
        ...product,
      },

    ]);

  };




  const deleteProduct = (id) => {

    setProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );

  };




  const updateProduct = (id, updatedProduct) => {

    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, ...updatedProduct }
          : item
      )
    );

  };


  const reduceStock = (items) => {

    setProducts((prev) =>

      prev.map((product) => {


        const boughtProduct = items.find(
          (item) => item.id === product.id
        );


        if (boughtProduct) {

          return {

            ...product,

            stock: Math.max(
              0,
              Number(product.stock || 0) - Number(boughtProduct.quantity || 1)
            ),

          };

        }


        return product;


      })

    );

  };

  const canFulfillOrder = (items) => items.every((item) => {
    const product = products.find((productItem) => productItem.id === item.id);
    return product && Number(product.stock || 0) >= Number(item.quantity || 1);
  });





  return (

    <ProductContext.Provider

      value={{

        products,

        addProduct,

        deleteProduct,

        updateProduct,

        reduceStock,
        canFulfillOrder,

      }}

    >

      {children}

    </ProductContext.Provider>

  );

}



export function useProducts(){

  return useContext(ProductContext);

}
