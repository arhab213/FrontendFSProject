import { useNavigate } from "react-router-dom"
import "./Home.css"
function Home (props){
 let navigate=useNavigate()
return(<div id="HomePage">
       <img src="./Logo.png" alt="" />
       <h1>Welcome to our Site ..</h1>
       <button onClick={()=>navigate("/Products")}>See our Products</button>
       </div>

)
}
export default Home 