
import { ContentContainer } from "../Text/ContentContainer";
import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <ContentContainer className={style.content}>
        <div>
          <h2>WE BRING YOUR SPACE TO LIFE</h2>
        </div>
        <div>
          <h2>Quik Links</h2>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Our story</li>
            <li>Collection</li>
          </ul>
        </div>
        <div>
          <h2>About Us</h2>
          <p>
            We design morden ,sustainable , and high quality furniture that
            elevates you everyday living.
          </p>
        </div>
        <div>
          <h2>Stay connected</h2>
          <p>
            We design morden ,sustainable , and high quality furniture that
            elevates you everyday living.
          </p>
          <button className={style.button}>BUY NOW</button>
        </div>
        <div  className={style["icons"]}>
          <h2 className={style['h2Icon']}>  Follow Us on TikTok</h2>
          <div className={style["iconFacebook"]}>
            <svg xmlns="http://www.w3.org/2000/svg"
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z"/>
            </svg>
         <div className={style["iconTwitter"]}>
                 <svg xmlns="http://www.w3.org/2000/svg" 
                 width="16" 
                 height="16" 
                 fill="currentColor" 
                 viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
               </svg>
               <h2> Email:decofuniture@gmail.com</h2>
                </div>
              
              </div>
          
</div>
      </ContentContainer>
    </footer>
  );
};
