import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MiniCart from "cart/MiniCart";
import Login from "cart/Login";
export default function Header(){
  const navigate = useNavigate();
    return(
        
        <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
        <div className="flex">
          <div className="flex-grow flex" >
          <Link to="/">Fidget Spinner World</Link>
          <div className="mx-5">|</div>
          <Link id="cart" to="/cart">
            Cart
          </Link>
        </div>
          </div>
          <div className="flex-end relative">
            <MiniCart />
            <Login />
          </div>
        </div>
      
    );
}