import { useState,createContext,useContext } from "react";
let context=createContext(null)
export const Contexts=()=>useContext(context)
function ContextProvider(props){
    let{children}=props
    let [Total,setTotal]=useState(0)
    let [cartarray,setcartarray]=useState([])
    let [hidcart,sethidcart]=useState(false)
   const getIncrat=(elemnt)=>{
     elemnt.qte=1
     setcartarray([...cartarray,elemnt])
    }
   const remove=(index)=>{
     let tmp=[...cartarray]
     tmp.splice(index,1)
     setcartarray(tmp)
     }
    const total=()=>{
         let total=0
       cartarray.map((e)=>{
         total+=parseInt(e.qte)*parseInt(e.price)
       })
       setTotal(total)
     }
   const changeQte=(elem,index)=>{
         cartarray[index].qte=elem.current.value
         total()
     }
 
 
 
 let state={hidcart,sethidcart,cartarray,setcartarray,Total,setTotal}
 let func={getIncrat,total,remove,changeQte}
 let val={...func,...state}

return <context.Provider value={val}>{children}</context.Provider>
}
export default ContextProvider