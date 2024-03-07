import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { filterMedicine } from "../../redux/filter/filterSlice";
import s from "./pharmacies.module.scss";

export const Pharmacies = () => {
  const medicines = useAppSelector((state) => state.medicine.items);
  const dispatch = useAppDispatch();

  const onClick = (clickedData: { pharmacy: string}) => {
    dispatch(filterMedicine([clickedData]));
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Pharmacies</h2>
      <div>
        <ul className={s.groupButton}>
          {medicines.map((data, index) => (
            <li
              key={index}
              className={s.listButton}
              onClick={() => onClick(data)}
            >
              <button type="button">
                {data.pharmacy}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
