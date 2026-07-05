import React from "react";
import { Text } from '../Text'
import style from "./Navbar.module.css";
import {FiSearch} from "react-icons/fi";
import { ContentContainer } from "../ContentContainer";



export const Navbar =() => {



return (
<nav
   className={style.navbar}>
<div className={style.content}> 

<Text variant='h2' className={style.logo}>ModernFurniture</Text> <br/>
<a href='/#' className={style.link}>Home</a>
<a href='/#' className={style.link}>Shop</a>
<a href='/#' className={style.link}>About</a>
<a href='/#' className={style.link}>Contact</a> 
<div className={style.profile}>
    <FiSearch  size={30}/>
    <div className= {style.avatar}></div>
    </div>

</div> 

</nav>

)}