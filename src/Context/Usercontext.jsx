import { createContext, useContext, useState } from "react";

const UserContext = createContext();


export function UserProvider({children}) {

  const [user,setUser] = useState(()=>{

    const data = localStorage.getItem("user");
    return data ? JSON.parse(data) : null;

  });


  const [users,setUsers] = useState(()=>{

    const data = localStorage.getItem("users");

    return data ? JSON.parse(data) : [];

  });



  const signup = (data)=>{


    const newUser = {
      id: Date.now(),
      name: data.name,
      email: data.email,
      phone: data.phone || "Not Added",
      password: data.password,
      orders:0
    };


    const updatedUsers = [
      ...users,
      newUser
    ];


    setUsers(updatedUsers);


    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );


    localStorage.setItem(
      "user",
      JSON.stringify(newUser)
    );


    setUser(newUser);

  };




  const login = (email,password)=>{


    const found = users.find(
      item =>
      item.email === email &&
      item.password === password
    );


    if(found){

      localStorage.setItem(
        "user",
        JSON.stringify(found)
      );


      setUser(found);

      return true;

    }


    return false;

  };





  const updateUser=(name)=>{


    const updated = {
      ...user,
      name:name
    };


    setUser(updated);


    localStorage.setItem(
      "user",
      JSON.stringify(updated)
    );


    const updateUsers = users.map(item=>

      item.id === user.id
      ? updated
      : item

    );


    setUsers(updateUsers);


    localStorage.setItem(
      "users",
      JSON.stringify(updateUsers)
    );

  };





  const logout=()=>{

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
updateUser,
logout

}}

>

{children}

</UserContext.Provider>

);


}



export function useUser(){

return useContext(UserContext);

}