import { createContext, useContext, useEffect, useState } from "react";

const MessageContext = createContext();


export function MessageProvider({children}){


const [messages,setMessages] = useState(()=>{

const saved = localStorage.getItem("messages");

return saved ? JSON.parse(saved) : [];

});



useEffect(()=>{

localStorage.setItem(
"messages",
JSON.stringify(messages)
);

},[messages]);





const addMessage = (message)=>{


setMessages((prev)=>[
...prev,
message
]);


};






const replyMessage = (id,reply)=>{


setMessages((prev)=>

prev.map((msg)=>

msg.id === id

?

{
...msg,
reply:reply,
status:"Replied"
}

:

msg

)

);


};






const deleteMessage=(id)=>{


setMessages((prev)=>

prev.filter(
(msg)=>msg.id !== id
)

);


};




return(

<MessageContext.Provider

value={{

messages,
addMessage,
replyMessage,
deleteMessage

}}

>

{children}

</MessageContext.Provider>


);


}




export function useMessages(){

return useContext(MessageContext);

}