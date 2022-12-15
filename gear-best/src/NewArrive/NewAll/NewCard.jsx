import React from 'react';
import styles from './newcard.module.css';

const NewCard = ({ price__1, image, price, id, title }) => {
  const discount = Number(price) - Number(price__1);
    const dis = (Math.sqrt(discount * Number(price__1)) / 100).toFixed(0);
  return (
    <div className={styles.container}>
      <div>
      <div className={styles.discount}>
       <span style={{ fontSize: "17px", color: "white" }}>{dis}%</span>
       <span style={{ fontSize: "14px", color: "white" }}>OFF</span>
      </div>
        <img src={image} alt="" />
      </div>
      <div>
        <p>{title}</p>
        <span style={{ fontSize: "17px", color: "red" }}>${price__1}</span>
        <br />
        <span style={{ fontSize: "13px", color: "grey" }}>RRP:</span>
        <span style={{ fontSize: "13px", color: "grey" }}>
          <del>${price}</del>
        </span>
      </div>
    </div>
  );
}

export default NewCard