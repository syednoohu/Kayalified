import React from 'react'
import './header.css'
import  '../index.css'
import { AiOutlineUser } from "react-icons/ai"; //Ant Design Icons
import { AiOutlineDashboard } from "react-icons/ai"; //Ant Design Icons
import { AiOutlineMail } from "react-icons/ai"; //Ant Design Icons
import { AiOutlineLogin } from "react-icons/ai"; //Ant Design Icons
import { AiOutlineLogout } from "react-icons/ai"; //Ant Design Icons
import { AiOutlineMenu } from "react-icons/ai"; //Ant Design Icons
import { AiOutlineClose } from "react-icons/ai"; //Ant Design Icons

import logo from '../assets/images/Kayalified.svg'





const Header = () => {
  return (
    <section className='header '>
        <div className="container flex ">
          <div className="header__left">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="header__right flex">
            <ul className='navbar flex'>
              <li>
                 <a href="/Profile"> <AiOutlineUser/> <span>PROFILE</span> </a>
              </li>
                <li>
                  <a href="/Dashboard"> <AiOutlineDashboard/> <span>DASHBOARD</span></a>
                </li>
                <li>
                  
                  <a href="/Message"> <AiOutlineMail/> <span>MESSAGE</span> </a>
                </li>
                <li>
                 
                  <a href="/Login">  <AiOutlineLogin/><span>LOGIN</span></a>
                </li>
                <li>
                  
                  <a href="/Logout"> <AiOutlineLogout/><span>LOGOUT</span> </a>
                </li>
            </ul>
            <div className="icons flex">
              <a href="">1</a>
              <a href="">2</a>
              <a href="">3</a>
            </div>
            <div className='header__mobile flex'>
              <button className="btn-menu"><AiOutlineMenu/></button>
              <button className="btn-close"><AiOutlineClose/></button>
            </div>
            <button className="btn btn-primary header__right-postAd">Post Your Ad</button>
          </div>
        </div>
    </section>
  )
}

export default Header
