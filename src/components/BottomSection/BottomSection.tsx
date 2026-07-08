import couch from '../../assets/table.png'
import style from "./BottomSection.module.css";

export const BottomSection = () => {
  return (
    <div>
      <div className='table'>
        <div  style={{
            backgroundImage: `url(${couch})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "300px",
            marginTop: "40px",
          }}>
     <img src={couch} alt="couch" style={{ width: "100%", height: "auto" }} />
     <button className={style.button}>
          BUY NOW
        </button>
        </div>
        </div>
    </div>


  )
}
