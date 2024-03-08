import React from 'react'
import { Pharmacies } from '../components/pharmacies/pharmacies'
import  ListPharmacies  from '../components/list-pharmacies/listPharmacies'
import s from "./pageStyle.module.scss"
import { useAppSelector } from '../redux/store'

export const Home = () => {
  const filter = useAppSelector((state) => state.filter.items);
  const shop = useAppSelector((state) => state.shop.shopList);
  console.log(shop)
  const medicine = filter[0]?.medications;
  
console.log("медикаменти:", medicine);
console.log("список магазинів:", shop);
  return (
    <section className={s.container}>
      <div className={s.wrapShop}>
        <Pharmacies />
        <ListPharmacies medicines={medicine} shopList={shop} />
      </div>
    </section>
  );
}
