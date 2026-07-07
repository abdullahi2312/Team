import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Store from "./Redux/store/Store.js";


import { ProductProvider } from "./Pages/Productcontext.jsx";
import { OrderProvider } from "./Context/Ordercontext.jsx";
import { UserProvider } from "./Context/Usercontext.jsx";



createRoot(document.getElementById("root")).render(

  <StrictMode>

    <Provider store={Store}>


      <UserProvider>


        <OrderProvider>


          <ProductProvider>


            <BrowserRouter>

              <App />

            </BrowserRouter>


          </ProductProvider>


        </OrderProvider>


      </UserProvider>


    </Provider>


  </StrictMode>

);