import couch from '../../assets/table.png'
import style from "./BottomSection.module.css";

export const BottomSection = () => {
  return (
    <div>
     <img src={couch} alt="couch" style={{ width: "100%", height: "auto" }} />
     <button className={style.button}>
          BUY NOW
        </button>
    </div>
  )
}
