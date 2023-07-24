import { card, team } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover our team ! 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "Coming together is a beginning. Keeping together is progress. Working together is success." - <b>Henry Ford</b>
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={team} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
