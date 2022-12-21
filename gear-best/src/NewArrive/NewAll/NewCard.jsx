import React from 'react';
import styles from './newcard.module.css';
import { Link } from 'react-router-dom';
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
        <Link to={`/superDeal/${id}`}>
          <img src={image} alt="icon" />
        </Link>
      </div>
      <div>
      
        <Link to={`/superDeal/${id}`}>
          <p className={styles.titlePN}>{title}</p>{" "}
        </Link>
        <span style={{ fontSize: "13px", color: "grey" ,cursor:"default" }}>RRP:</span>
        <span style={{ fontSize: "13px", color: "grey" }}>
          <del style={{cursor:"default"}}>${price}</del>
        </span>
        <br />
        <span style={{ fontSize: "17px", color: "red" }}>${price__1}</span>
      </div>
    </div>
  );
}

export default NewCard