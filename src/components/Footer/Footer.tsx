import { ContentContainer } from "../Text/ContentContainer";
import style from "./Footer.module.css";
import tiktok from "../../assets/Tiktok.jpg";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/Twitter.jpg";
import instagram from "../../assets/Instagram.jpg";

export const Footer = () => {
  return (
    <footer>
      <ContentContainer className={style.content}>
        <div>
          <h2 className={style["footerh2"]}>WE BRING YOUR SPACE TO LIFE</h2>
        </div>
        <div>
          <h2 className={style["footerh2"]}>Quik Links</h2>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Our story</li>
            <li>Collection</li>
          </ul>
        </div>
        <div>
          <h2 className={style["footerh2"]}>About Us</h2>
          <p className={style["footerp"]}>
            We design morden ,sustainable , and high quality furniture that
            elevates you everyday living.
          </p>
        </div>
        <div>
          <h2 className={style["footerh2"]}>Stay connected</h2>
          <p className={style["footerp"]}>
            We design morden ,sustainable , and high quality furniture that
            elevates you everyday living.
          </p>
          <button className={style.button}>BUY NOW</button>
        </div>

        <div className={style["iconImage"]}>
          <img src={tiktok} alt="Tiktok.jpg" />
          <img src={facebook} alt="Facebook.png" />
          <img src={twitter} alt="Twitter.jpg" />
          <img src={instagram} alt="Instagram.jpg" />
        </div>

        <div>
          <h2 className={style["emailh2"]}>Email:decofuniture@gmail.com</h2>
        </div>
      </ContentContainer>
    </footer>
  );
};
