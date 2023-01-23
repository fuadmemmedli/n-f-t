import React from 'react'
import { Link } from "react-router-dom";
import { FaStore} from "react-icons/fa"
import { FaUser } from "react-icons/fa";
import "../app.css"
const Navbar = () => {
  return (
    <nav>
      <div className='marketplace__nav__logo'>
        <FaStore/> NFT Marketplace
      </div>
      <div className='marketplace__nav__btns'>
      <button><Link to='/'>Marketplace</Link></button>
      <button>Rankings</button>
      <button>Connet a wallet</button>
      <button className='singup__btn'><FaUser/> <Link to='/singup'>Sing Up</Link></button>
      </div>

    </nav>
  )
}

export default Navbar
