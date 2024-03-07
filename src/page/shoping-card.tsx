import { Forma } from "../components/forma/forma";
import { ListPharmacies } from "../components/list-pharmacies/listPharmacies";
import s from "./pageStyle.module.scss";


const ShopingCard = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapShop}>
        <Forma />
        <ListPharmacies />
      </div>
      <div className={s.submit}>
        <p>Total price:</p>
        <button className={s.buttonSubmit}>Submit</button>
      </div>
    </div>
  );
};
export default ShopingCard;
