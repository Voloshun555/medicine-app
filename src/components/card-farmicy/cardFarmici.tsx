// import tablket from "../../image/2080020.jpg";
import s from "./cardFarmicy.module.scss";

interface IStep {
  step?: boolean;
  name?: string;
  image?: string;
  price?: number;
  buttonText?: string;
  onClick?: () => void;
}


export const CardFarmicy = ({
  step,
  name,
  image,
  price,
  onClick,
  buttonText,
}: IStep) => {
  return (
    <li className={s.cardList}>
      <img className={s.image} src={image} alt={name} />

      <div className={s.wrapDescription}>
        <h2 className={s.title}>{name}</h2>
      </div>
      <div className={s.totalPrice}>
        <p>{price}</p>
        {step && <input type="number" min={1} step={1} value={1} />}
      </div>

      <button onClick={onClick}>{buttonText}</button>
    </li>
  );
};
