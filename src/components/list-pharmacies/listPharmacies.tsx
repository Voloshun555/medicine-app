import { CardFarmicy } from "../card-farmicy/cardFarmici";
import s from "./listPharmacies.module.scss";

interface IStep {
  step?: boolean;
}

export const ListPharmacies = ({ step }: IStep) => {
  return (
    <div className={s.container}>
      <div>
        <ul className={s.containerCard}>
          <CardFarmicy step={false} />
          
        </ul>
      </div>
    </div>
  );
};
