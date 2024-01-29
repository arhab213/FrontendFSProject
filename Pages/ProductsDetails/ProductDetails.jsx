import { useNavigate, useParams } from 'react-router-dom'
import './ProductDetail.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from '../../src/component /Slider/Slider'
import ItemsInCart from '../../src/component /ItemsIncart/ItemsInCart'
import { Contexts } from '../../src/context'
function ProductDet(props){
    let {id}=useParams()
   let {hidcart,sethidcart,total,Total,cartarray,getIncrat}=Contexts()
    let navigate=useNavigate()
    useEffect(()=>{
        getAPI(id)
    },[])
    let [detail,setdetail]=useState(null)
 const getAPI=async(id)=>{
    const res=await axios.get(`https://dummyjson.com/products/${id}`)
   if(!res){
    return alert('Erreur API')
   }
   setdetail(res.data)
   
 }
 useEffect(()=>{
 total()
 },[cartarray])

return(<>
 <i id='Cart' className="fa-solid fa-cart-shopping" onClick={()=>sethidcart(!hidcart)} ></i>
        { hidcart ? (<div className='Cart'>
        <h3 id='total'>total : {Total} $</h3>

          {
            cartarray.map((e,i)=>{return <ItemsInCart element={e} index={i} />})
            }
          
      </div>):null}
  
   {detail ? (<div id='ProductDetails'>
    <div >
    <div className='TitleProduct'>{detail.title}</div>
    <img id='ProductImage' src={detail.thumbnail} />
    <div id='PriceProduct'> {detail.price},00 $</div>
    <div id="ProductsDescription">{detail.description}</div>
    <div id='Buttons'>
    <button id='BackBtn' onClick={()=>navigate(`/Products`)}>Back</button>
    <button id='AddToCartBtn' onClick={()=>getIncrat(detail)}  >Add To Cart</button>
    </div>
    </div>
    <div id='MoreImages'><p>More images : </p>{<Slider images={detail.images}/>}</div>
   </div>):null}
  
 
</>)
}
export default ProductDet