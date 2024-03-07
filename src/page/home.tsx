import React from 'react'
import { Pharmacies } from '../components/pharmacies/pharmacies'
import { ListPharmacies } from '../components/list-pharmacies/listPharmacies'
import s from "./pageStyle.module.scss"

export const Home = () => {
  return (
    <section className={s.container}>
      <div className={s.wrapShop}>
        <Pharmacies />
        <ListPharmacies />
      </div>
    </section>
  );
}
