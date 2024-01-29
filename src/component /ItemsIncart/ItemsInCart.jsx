import { useRef } from 'react'
import './ItemsInCart.css'
import { Contexts } from '../../context'
function ItemsInCart (props){
let{element,index}=props
let ref = useRef(null)
let {changeQte,remove}=Contexts()
return(
    <div id='ItemInCart'>
        <div id='dataContainer'>
        <div id='title'>{element.title}</div>
        <div id='brand'>{element.brand}</div>
        <div id='price'>{element.price}</div>
        </div>
        <div id='BtnContainer'>
            <input type="number"   ref={ref} onChange={()=>changeQte(ref,index)}/>
            <button onClick={()=>remove(index)}>remove</button>
        </div>
        
    </div>
)
}
export default ItemsInCart