import React from 'react'
import { Text } from '../Text'
import style from './Navbar.module.css'



export const Navbar =() => {



return (
<nav>
<div className={style.content}>
<Text varient={'h2'} style={{ margin:0}}>ModernFurniture</Text> <br/>
< a href='/#' className={style.link}>Home</a>
< a href='/#' className={style.link}>Shop</a>
< a href='/#' className={style.link}>About</a>
< a href='/#' className={style.link}>Contact</a> <br/>
<div className={style['profile-icon']}> <br/>
<Text varient={'span'}>MF </Text> <br/>
</div>
</div>

</nav>
)
}