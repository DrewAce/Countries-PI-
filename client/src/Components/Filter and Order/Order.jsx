import styles from "./FilterAndOrder.module.css";

import { orderAsdDes, orderPopulation } from "../../Redux/actions";
import { AscDsc, population } from "./ListO";

import Select from "./Select.jsx";

const Order = ({ setCurrentPage }) => {
  return (
    <div className={styles.filtros}>
      <Select
        function={orderAsdDes}
        list={AscDsc}
        setCurrentPage={setCurrentPage}
      />
      <div className={styles.filtros}>   
      <Select
        function={orderPopulation}
        list={population}
        setCurrentPage={setCurrentPage}
      />
      </div>
    </div>
  );
};
export default Order;