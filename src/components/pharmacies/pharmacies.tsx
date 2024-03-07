import { useAppSelector } from "../../redux/store";
import s from "./pharmacies.module.scss";

export const Pharmacies = () => {
  const medicine = useAppSelector(state => state.medicine.items)
  return (
    <div className={s.container}>
      <h2 className={s.title}>pharmacies</h2>
      <div>
        <ul className={s.grupButton}>
          {medicine.map((data) => (
            <li className={s.listButton}>
              <button>{data.pharmacy}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
