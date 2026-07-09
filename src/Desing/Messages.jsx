import { useState } from "react";
import {
  FaEnvelope,
  FaReply,
  FaTrash,
  FaUser,
} from "react-icons/fa";

import { useMessages } from "../Context/MessageProvider";


function Messages(){


const {
messages,
replyMessage,
deleteMessage
}=useMessages();



const [reply,setReply]=useState("");

const [selected,setSelected]=useState(null);





const handleReply=(id)=>{


if(!reply){

alert("Write reply first");

return;

}



replyMessage(id,reply);


setReply("");

setSelected(null);


};







return(


<div className="min-h-screen bg-gray-100 p-4 sm:p-6">



<div className="max-w-6xl mx-auto">


<h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">

<FaEnvelope className="text-blue-600"/>

Messages Management

</h1>





{
messages.length === 0 ? (


<div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">

No Messages Found

</div>


)

:

(


<div className="grid grid-cols-1 md:grid-cols-2 gap-5">



{
messages.map((item)=>(



<div

key={item.id}

className="bg-white rounded-2xl shadow p-5"

>



<div className="flex justify-between items-center mb-4">


<div className="flex items-center gap-2">


<FaUser className="text-blue-600"/>


<h2 className="font-bold text-lg">

{item.name}

</h2>


</div>



<span

className={`text-sm px-3 py-1 rounded-full font-semibold

${

item.status==="Replied"

?

"bg-green-100 text-green-700"

:

"bg-yellow-100 text-yellow-700"

}

`}

>


{item.status}


</span>



</div>







<div className="space-y-2 text-sm">


<p>

<strong>Email:</strong> {item.email}

</p>



<p>

<strong>Subject:</strong> {item.subject}

</p>



<p className="bg-gray-100 p-3 rounded-lg">

{item.message}

</p>



</div>






{
item.reply && (


<div className="mt-4 bg-blue-50 p-3 rounded-lg">


<h3 className="font-bold text-blue-700">

Admin Reply

</h3>



<p>

{item.reply}

</p>


</div>


)

}







{
selected === item.id && (


<div className="mt-4">


<textarea


value={reply}

onChange={(e)=>setReply(e.target.value)}

placeholder="Write reply..."

rows="4"

className="w-full border rounded-lg p-3 outline-none"

></textarea>




<button

onClick={()=>handleReply(item.id)}

className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg flex items-center gap-2"

>


<FaReply/>

Send Reply


</button>



</div>


)

}







<div className="flex justify-between mt-5">



<button

onClick={()=>setSelected(item.id)}

className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"

>


<FaReply/>

Reply

</button>






<button

onClick={()=>deleteMessage(item.id)}

className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"

>


<FaTrash/>

Delete

</button>





</div>







</div>



))

}



</div>



)

}



</div>


</div>


);


}



export default Messages;