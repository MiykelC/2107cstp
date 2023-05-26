import './header.css';




const Header = () => {
  return (
    
    <header className='header-container'>
    
      <nav>
        <div className='logoCon'>
          <img src='/logo.png' alt ='logo'></img>
        </div>
        <div className='navlinks'>
        <ul>
          <a>Home</a>
          <a>Shop</a>
          <a>Contact</a>
          <a>Services</a>
        </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header