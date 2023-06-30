
import '../styles/navBar.css'
import navLogo from '../images/NavLogo.png'


const NavBar = () => {

    return (
        <div className='navCon'>
            
                
                    <a href="/">Home</a> 
                    <a href="/About"> About</a>
                    <img src={navLogo} alt="logo" className="navLogo" />
                    <a href="/Contact">Contact</a>
                    <a href="/MoreNews">More News</a>
                
        </div>
    )
}

export default NavBar