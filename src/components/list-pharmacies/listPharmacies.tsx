import React from "react";
import { useAppDispatch } from "../../redux/store";
import { CardFarmicy } from "../card-farmicy/cardFarmici";
import s from "./listPharmacies.module.scss";
import { addShopItem, removeShopItem } from "../../redux/shop/shopSlice";

interface ListPharmaciesProps {
  medicines: any[];
  shopList: any[];
  step?: boolean;
}

const ListPharmacies: React.FC<ListPharmaciesProps> = ({
  medicines,
  shopList,
  step,
}) => {
  const dispatch = useAppDispatch();

  const handleShopAction = (item: any) => {
    const isItemInShop = shopList.some((shopItem) => shopItem.id === item.id);
    if (isItemInShop) {
      dispatch(removeShopItem({ id: item.id }));
    } else {
      dispatch(addShopItem({ item: item }));
    }
  };

  return (
    <div className={s.container}>
      {medicines && medicines.length > 0 ? (
        <ul className={s.containerCard}>
          {medicines.map((item) => (
            <CardFarmicy
              key={item.id}
              step={step}
              name={item.name}
              image={item.image}
              price={item.price}
              onClick={() => handleShopAction(item)}
              buttonText={
                shopList.some((shopItem) => shopItem.id === item.id)
                  ? "Remove"
                  : "Add card"
              }
            />
          ))}
        </ul>
      ) : (
        <h1>No medications found.</h1>
      )}
    </div>
  );
};

export default ListPharmacies;
