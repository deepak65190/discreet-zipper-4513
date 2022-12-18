import React from "react";
import CardMap from "./CardMap";
import styles from "./Card.module.css";
import { useState } from "react";

const Card = () => {
  let getDataLocal = JSON.parse(localStorage.getItem("card")) || [];

  const [data, setData] = useState(
    getDataLocal.map((el) => ({ ...el, quantity: 1 }))
  );
  console.log(data)

  const [totalP, setTotalP] = useState(
    data.reduce((sum, el) => (sum = sum + el.price), 0)
  );
  const handleDataChange = (id, value) => {
    const updatedData = data.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + value,
            price: item.price + (item.price / item.quantity) * value,
          }
        : item
    );
    setData(updatedData);
    setTotalP(data.reduce((sum, el) => (sum = sum + el.price), 0));
  };
  return (
    <div className={styles.cardComponentMap}>
      {getDataLocal?.map((ite, i) => {
        return (
          <CardMap key={i} data={ite}  handleDataChange={handleDataChange} />
        );
      })}
      <div>{data.reduce((sum, el) => (sum = sum + el.price), 0)}</div>
    </div>
  );
};

export default Card;
