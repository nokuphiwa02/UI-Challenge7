import { Text } from "../Text";
import chair from "../../../assets/chair.png";
import style from "./Decoration.module.css";

export const Decoration = () => {
  return (

    <>
    <div className= {style.container}>
   

      <div className={style["left"]}>
        {/* <div className={style["Decoration-Text"]}> */}
        <Text variant="h1">Modern Furniture For More Than living</Text>
        <Text variant="h2">Styles Meet Comfort</Text>
        <Text variant="p">
           Discover furniture that brings comfort, elegance, and timeless style to your home.
           Every piece is thoughtfully designed to create a warm and inviting space.
           From luxurious sofas to modern chairs and tables, we have it all.
           Our collection combines premium quality with exceptional craftsmanship.
           Create a home that reflects your unique personality and lifestyle.
           Enjoy beautiful designs made for everyday comfort and lasting durability.
           Transform every room into a place you'll love to spend time in.
           Experience furniture that blends beauty, function, and affordability.
           Start your journey to a more stylish home with our latest collection.
        </Text>
        <button className={style.button}>
          View More
        </button>
      </div>
      <div className={style.right}>
      <img src={chair} alt="chair" />
      </div>
      </div>
    </>
  );
};
