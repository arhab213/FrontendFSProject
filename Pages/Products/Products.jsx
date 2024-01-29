import { useEffect, useState } from 'react'
import './Products.css'
import axios from 'axios'
import Items from '../../src/component /ShopItems/Items'
import ItemsInCart from '../../src/component /ItemsIncart/ItemsInCart'
import { Contexts } from '../../src/context'
 
function Products(props){
let [prods,setprods]=useState(null)

    const getApi=async()=>{
        const res= await axios.get('http://localhost:3110/products/')
        if(res.data=="there is no products" || !res.data){
            return alert("There is probleme with the API")
        }
        setprods(res.data)
    }
    useEffect(()=>{
        getApi()
    },[])
   
  let {hidcart,sethidcart,getIncrat,cartarray,total,Total}=Contexts()
   
    useEffect(()=>{
        total()
        },[cartarray])
    return(
        <> 
        <i id='Cart' className="fa-solid fa-cart-shopping" onClick={()=>sethidcart(!hidcart)} ></i>
        { hidcart ? (<div className='Cart'>
        <h3 id='total'>total : {Total} $</h3>

          {
            cartarray.map((e,i)=>{return <ItemsInCart element={e} index={i} />})
            }
          
      </div>):null}
        <div id='shopContainer'>
            { prods ?(prods.map((e)=>{return(<Items element={e} addtocart={()=>getIncrat(e)} />)})):null}
        </div>
        
     
      
        </>
    )


}
export default Products