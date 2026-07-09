import { createContext, useContext, useState } from "react";


const UserContext = createContext();



export function UserProvider({ children }) {


  const [user, setUser] = useState(() => {

    const data = localStorage.getItem("user");

    return data ? JSON.parse(data) : null;

  });




  const [users, setUsers] = useState(() => {

    const data = localStorage.getItem("users");

    return data ? JSON.parse(data) : [];

  });









  // ======================
  // SIGNUP
  // ======================

  const signup = (data) => {


    const newUser = {


      id: Date.now(),

      name: data.name,

      email: data.email,

      phone: data.phone || "Not Added",

      password: data.password,

      orders:0,

      role:"User",

      profileImage:"",

      favorites: [],

      createdAt:new Date().toLocaleDateString(),


    };





    const updatedUsers = [

      ...users,

      newUser

    ];





    setUsers(updatedUsers);

    setUser(newUser);



    localStorage.setItem(

      "users",

      JSON.stringify(updatedUsers)

    );



    localStorage.setItem(

      "user",

      JSON.stringify(newUser)

    );



  };









  // ======================
  // LOGIN
  // ======================

  const login = (email,password)=>{


    const found = users.find(

      (item)=>

      item.email === email &&

      item.password === password

    );




    if(found){


      setUser(found);


      localStorage.setItem(

        "user",

        JSON.stringify(found)

      );


      return true;


    }



    return false;


  };









  // ======================
  // ADD FAVORITE
  // ======================


  const addFavorite = (product)=>{


    if(!user) return;



    const favorites = user.favorites || [];




    const exists = favorites.find(

      (item)=>

      item.id === product.id

    );





    if(exists){

      return;

    }





    const updatedUser = {


      ...user,


      favorites:[

        ...favorites,

        product

      ]


    };





    setUser(updatedUser);



    localStorage.setItem(

      "user",

      JSON.stringify(updatedUser)

    );







    const updatedUsers = users.map(

      (item)=>

      item.id === updatedUser.id

      ?

      updatedUser

      :

      item

    );





    setUsers(updatedUsers);



    localStorage.setItem(

      "users",

      JSON.stringify(updatedUsers)

    );



  };









  // ======================
  // REMOVE FAVORITE
  // ======================


  const removeFavorite = (id)=>{


    if(!user) return;



    const updatedUser = {


      ...user,


      favorites:

      (user.favorites || []).filter(

        (item)=>

        item.id !== id

      )


    };






    setUser(updatedUser);



    localStorage.setItem(

      "user",

      JSON.stringify(updatedUser)

    );





    const updatedUsers = users.map(

      (item)=>

      item.id === updatedUser.id

      ?

      updatedUser

      :

      item

    );





    setUsers(updatedUsers);



    localStorage.setItem(

      "users",

      JSON.stringify(updatedUsers)

    );



  };









  // ======================
  // UPDATE PROFILE
  // ======================


  const updateUserProfile = (data)=>{


    const updatedUser = {


      ...user,

      ...data,


    };





    setUser(updatedUser);



    localStorage.setItem(

      "user",

      JSON.stringify(updatedUser)

    );





    const updatedUsers = users.map(

      (item)=>

      item.id === updatedUser.id

      ?

      updatedUser

      :

      item

    );





    setUsers(updatedUsers);



    localStorage.setItem(

      "users",

      JSON.stringify(updatedUsers)

    );


  };








  // magaca keliya

  const updateUser = (name)=>{


    updateUserProfile({

      name

    });


  };









  // ======================
  // LOGOUT
  // ======================


  const logout = ()=>{


    localStorage.removeItem("user");

    setUser(null);


  };









  return (


    <UserContext.Provider

      value={{


        user,

        users,

        signup,

        login,

        logout,

        updateUser,

        updateUserProfile,

        addFavorite,

        removeFavorite,


      }}

    >


      {children}


    </UserContext.Provider>


  );


}







export function useUser(){

  return useContext(UserContext);

}