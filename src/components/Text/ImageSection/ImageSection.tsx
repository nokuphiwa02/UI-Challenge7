import { Text } from "../Text";
import design  from "../../../assets/design.jpg";
import style from "./ImageSection.module.css";

export const ImageSection = () => {
  return (
    <>
    <div className= {style.container}>
     <div className={style["left"]}>
      <img src={design } alt="design" />
      </div>

      <div className={style["right"]}>
        {/* <div className={style["Decoration-Text"]}> */}
        <Text variant="h1">WHY CHOOSE US</Text>
        <Text variant="h2">Quality  Furniture  You Can Trust</Text>
        <Text variant="p">
          We are committed to providing furniture that combines exceptional quality,
          modern design, and lasting comfort. Every piece is carefully crafted using
          durable materials to ensure long-term value and everyday reliability.
          Whether you're furnishing a living room, bedroom, or office, our collection offers
          stylish solutions for every space. We believe great furniture should be both
          beautiful and functional, helping you create a home that reflects your
          personality. With affordable prices, reliable service, and customer 
          satisfaction at the heartof everything we do, we're here to help you transform
          your home into a space you'll love for years to come.
        </Text>
        <button className={style.button}>
          Browse Now
        </button>
      </div>
      </div>
    </>
  )
}
