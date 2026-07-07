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

            stock:
              Number(product.stock || 0) -
              1,

          };

        }


        return product;


      })

    );

  };





  return (

    <ProductContext.Provider

      value={{

        products,

        addProduct,

        deleteProduct,

        updateProduct,

        reduceStock,

      }}

    >

      {children}

    </ProductContext.Provider>

  );

}



export function useProducts(){

  return useContext(ProductContext);

}