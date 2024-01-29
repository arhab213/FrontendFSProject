import { useState } from "react"
import "./AddProducts.css"
import axios from "axios"
function AddProduct(props){
    const [newProd,setnewprod]=useState({})
    const onChange=(e)=>{
        let{name,value}=e.target
         
       return setnewprod({...newProd,[name]:value})
    }
const DataSender=async(e)=>{
   e.preventDefault()
    try {
        const res =await axios.post('http://localhost:3110/products/add',newProd,{headers:{token:window.localStorage.token}})
       
     if(!res){
         return alert('there is a probleme with the API, try again later')
     }
    alert(res.data)
     const {data}=res
     if(data=="element didn't been created"){
         return alert("a problem happened when adding the element ")
     }
     if(data=="element added !"){
         return alert("element added !")
     }
    } catch (error) {
       console.log(error.message) 
    }
}
return(<>
<form onSubmit={DataSender}  >
<input type="text"  name="name" onChange={onChange} required/>
<input type="number" name="price"  onChange={onChange} required/>
<input type="text" name="description"  onChange={onChange} />
<input type="text" name="image"  onChange={onChange} />
<button >Add products</button>
</form>
</>)
}
export default AddProduct