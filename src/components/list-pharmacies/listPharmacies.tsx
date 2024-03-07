import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { CardFarmicy } from "../card-farmicy/cardFarmici";
import s from "./listPharmacies.module.scss";
import { addShopItem, removeShopItem } from "../../redux/shop/shopSlice";

interface IStep {
  step?: boolean;
}

export const ListPharmacies = ({ step }: IStep) => {
  const filter = useAppSelector((state) => state.filter.items);
  const medicine = filter[0]?.medications;

  const shop = useAppSelector(state => state.shop.shopList)
  console.log(medicine)

  const dispatch = useAppDispatch();

 const handleShopAction = (item: any) => {
   const isItemInShop = shop.includes(item.id);
   if (isItemInShop) {
     dispatch(removeShopItem({ id: item.id }));
   } else {
     dispatch(addShopItem({ item }));
   }
 };

  return (
    <div className={s.container}>
      {medicine && medicine.length > 0 ? (
        <ul className={s.containerCard}>
          {medicine.map((item) => (
            <CardFarmicy
              key={item.id}
              step={false}
              name={item.name}
              image={item.image}
              price={item.price}
              onClick={() => handleShopAction(item)}
              buttonText={shop.includes(item.id) ? "Remove" : "Add card"}
            />
          ))}
        </ul>
      ) : (
        <h1>No medications found.</h1>
      )}
    </div>
  );
};
