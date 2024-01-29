import { useNavigate } from "react-router-dom"
export const RouteProtuction=(props)=>{
    let{children,redirect}=props
    let navigate =useNavigate()
if(!window.localStorage.token){
  return navigate(redirect)
}
return children
}
export default RouteProtuction