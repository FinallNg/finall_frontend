import './Navbar.css'
{/*import logo from '../../assets/logo'*/}

function Navbar() {
  return (
    <header>
        <div>
             <h2>Finall</h2> 
            {/*</img src={logo} />*/}
        </div>

        {/* <div className="nav-links">
            <ul>
               <Link to='/'> 
                    <li>Home</li> 
                </Link>

                <Link to="/about">
                    <li>
                        About Us
                    </li>
                </Link>

                <Link to="/contact">
                    <li>
                        Contact Us
                    </li>
                </Link>
                
                
            </ul> 
        </div> */}

        {/* <input type="checkbox" /> */}


        <div>
            <ul>
                <li>
                    <a className='active' href='#'>Home</a>
                </li>

                <li>
                    <a href='#'>About</a>
                </li>

                <li>
                    <a href='#'>Services</a>
                </li>

                <li>
                    <a href='#'>Pricing</a>
                </li>

                <li>
                    <a href='#'>Contact Us</a>
                </li>
            </ul>

        </div>

        <div>
            {/* <button>Login</button> */}

            <a href='#' className='cta'>Login</a>

            <button className='cta'>Get Started</button>
        </div>
    </header>
  )
}

export default Navbar