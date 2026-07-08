import style from "./Hero.module.css";
import furniture from "../../../assets/Furniture.png";

export const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div
          style={{
            backgroundImage: `url(${furniture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "300px",
            marginTop: "40px",
          }}
        >
          {/* <div className="imageStyle">
            <img
              src={furniture}
              alt="furniture"
              style={{ display: "flex", alignItems: "center" }}
            />
          </div> */}
        </div>

        <div className={style.buttonStyle}>
          <button className={style.button}>Shop Now</button>
        </div>
      </div>
      <div className="section">
        <div className="container"></div>
      </div>
    </div>
  );
};
