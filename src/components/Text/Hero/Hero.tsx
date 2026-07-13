import style from "./Hero.module.css";
import furniture from "../../../assets/furniture.jpg";

export const Hero = () => {
  return (
    <div className="main-hero">
      <div className="hero">
        <div
          style={{
            backgroundImage: `url(${furniture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "110%",
            height: "600px",
            marginTop: "40px",
          }}
        >
          <div className={style.heroContent}>
            <h1 className={style.heroTopic}>WELCOME TO MODERN FURNITURE</h1>
            <h2 className={style.heroh2}>We offer high quality ,stylish furniture
              at affordable prices to help you create
              a comfortable and beatful home.
              shop with us and find the perfect pieces for every room.
            </h2>
            <div className={style.buttonStyle}>
            <button className={style.button}>Shop Now</button>
          </div>
          </div>
          {/* <div className={style.buttonStyle}>
            <button className={style.button}>Shop Now</button>
          </div> */}
        </div>
      </div>
      <div className="section">
        <div className="container"></div>
      </div>
    </div>
  );
};
