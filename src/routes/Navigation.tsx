import React from 'react'
import { BrowserRouter, NavLink , Route, Router, Routes } from "react-router-dom";
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={logo} alt="React logo" />

                <ul>
                    <li> 
                        <NavLink to="/" className={ ({isActive}) =>  isActive ? 'nav-active' : '' }> Home </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/about" className={ ({isActive}) =>  isActive ? 'nav-active' : '' } > About </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/shopping" className={ ({isActive}) =>  isActive ? 'nav-active' : '' } > shopping </NavLink>
                    </li>
                </ul>

            </nav>

            <Routes>
                <Route path="/" element={<h1> home page </h1>} />
                <Route path="about" element={<h1> About page </h1>} />
                <Route path="shopping" element={ <ShoppingPage /> } />
            </Routes>

        </div>
    </BrowserRouter>
)
}
