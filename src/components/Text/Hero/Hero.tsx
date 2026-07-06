import './Hero.module.css'
import { Text } from '../Text'
import furniture from '../../../assets/Furniture.jpg'


export const Hero = () => {
return (
<div>



<div className="hero">
<div className="hero-text">
<Text variant={'h2'}>room decoration </Text>
{/* <button style={{color:'white' , backgroundColor:'green', height:'50px',width:'120px'}}> SIGN UP</button> */}
<Text variant='h1' >furniture that love everyone</Text>
<Text variant={'h2'}>BEAUTIFUL LIVING </Text>
<button style={{color:'white' , backgroundColor:'#75896', height:'50px',width:'120px'}}> DISCOVER MORE</button>
</div>



</div>
<div className="section">
<div className="container">
<Text variant={'h1'} >Couch</Text>
<img src={furniture} alt="furniture" /> 
<button style={{color:'white' , backgroundColor:'', height:'50px',width:'120px'}}> LEARN MORE</button>
</div>
</div>
</div>
)
}
