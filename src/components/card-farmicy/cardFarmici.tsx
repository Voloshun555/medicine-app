import tablket from "../../image/2080020.jpg";
import s from "./cardFarmicy.module.scss";

interface IStep {
  step?: boolean
}


export const CardFarmicy = ({ step }: IStep) => {
  return (
    <li className={s.cardList}>
      <img className={s.image} src={tablket} alt="tablket" />

      <div className={s.wrapDescription}>
        <h2 className={s.title}>Title</h2>
        <p className={s.description}>Description</p>
      </div>

      <div className={s.totalPrice}>
        <p>45.55</p>
        {step && <input type="number" min={1} step={1} value={1}/>}
      </div>

      <button>add Card</button>
    </li>
  );
};
