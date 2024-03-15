import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { SiEthereum } from "react-icons/si";

export const Header = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>CryptoVerse</h1>
                   
           <SiEthereum color='orange' size={"25"} />

        </div>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/coins'>Coins</Link></li>
        </ul>

    </div>
  )
}
