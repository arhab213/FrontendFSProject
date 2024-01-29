import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar(props){
    let {NavbarElem,Logo}=props
    return(
        <>
        <div id='NavbarContainer'>
        <img id="Logo" src={Logo} alt="" />
        {
            NavbarElem.map((e)=>{
                let{name,url}=e
                
                return <Link className='LinkElement' to={url}>{name}</Link>
            })
            
        }
        
        </div>
        </>
    )

}
export default Navbar 