import { useDispatch } from "react-redux";
import { getCountries } from "../../Redux/actions";
import styles from "./FilterAndOrder.module.css";
const Select = (props) => {
  const dispatch = useDispatch();

  const handleSelect = (event) => {
    const option = event.target.value;
    props.setCurrentPage(1);
    if (option === "Continents" || option === "Activities")
      return dispatch(getCountries());
    if (option !== "None") return dispatch(props.funtion(option));
  };

  return (
    <div>
      <select className={styles.select} onChange={handleSelect}>
        {props.list.map((op) => {
          return (
            <option value={op} key={op}>
              {op}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
