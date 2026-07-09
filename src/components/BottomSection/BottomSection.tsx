import couch from '../../assets/table.png'
// import style from "./BottomSection.module.css";

export const BottomSection = () => {
  return (
    <div className='bottom'>
     
        <div  style={{
            backgroundImage: `url(${couch})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: 'sticky',
            width: "110%",
            height: "-500px",
            marginTop: "40px",
          }}>
            
           <img src={couch} alt="couch" style={{ width: "100%", height: "-100%" }} />
           {/* <div>
           <button className={style.button}>
              BUY NOW
           </button>
           </div> */}
       </div>
      
    </div>


  )
}
