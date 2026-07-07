import { Text } from "../Text";
import chair from "../../../assets/chair.png";
import style from "./Decoration.module.css";

export const Decoration = () => {
  return (

    <>
    <div className= {style.container}>
   

      <div className={style["left"]}>
        {/* <div className={style["Decoration-Text"]}> */}
        <Text variant="h1">Modern Comfort Chair</Text>
        <Text variant="h2">ROOM DECORATION</Text>
        <Text variant="p">
          Enjoy comfort and style everyday. Made with quality meterials for
          long-lasting use. Perfect for your home or office . Simple, morden,
          and elegent. A chair you'll love to use
        </Text>
      </div>
      <div className={style.right}>
      <img src={chair} alt="chair" />
      </div>
      </div>
    </>
  );
};
