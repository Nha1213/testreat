import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AlignJustify, X} from 'lucide-react'
import './style/Navbar.css'
const Links = [
    {
        label: "Home",
        path: '/'
    },
    {
        label: "About",
        path: 'about'
    },
    {
        label: "Login",
        path: 'login'
    },
    {
        label: "Services",
        path: 'services'
    }
]
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>

            <div className='controll-navbar'>
                <div className='logo'>
                    <h1>Navbar</h1>
                </div>
                <div className='nav-toggle' onClick={() => setIsOpen(!isOpen)}>
                   <button>
                   {
                    isOpen ? <X /> : <AlignJustify /> 
                   }
                   </button>
                </div>
                <ul className={isOpen ? 'constroll-navbar . ul hide' : 'constroll-navbar ul'}>
                    {
                        Links.map((index) => {
                            return (
                                <li key={index.label} onClick={() => setIsOpen(false)}>
                                    <NavLink to={index.path}>{index.label}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}

export default Navbar
