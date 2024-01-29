import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'

function Login (props){
    let navigate=useNavigate()
    let [userInf,SetuserInf]=useState({})
    const onChange=(e)=>{
     let{name,value}=e.target
     return SetuserInf({...userInf,[name]:value})
    }
    const DataSender=async(e)=>{
        e.preventDefault()
        const res=await axios.post('http://localhost:3110/users/Login',userInf)
        if(!res){
            return res.json('there is a probleme with the API')
        }
        let{data}=res
        if(data.message!="user connected"){
             return alert(data.message) 
        }
     let{token,message}=data
        alert(message)
        window.localStorage.setItem("token",token)
       setTimeout(()=>{
         return navigate('/products')},2000)
    }

    return(
     <>
     <form  onSubmit={DataSender}>
        <input type="text" required name="name" onChange={onChange}/>
        <input type="password" required name="password" onChange={onChange}/>
        <button>Login</button>
     </form>
     </>
    )
}
export default Login