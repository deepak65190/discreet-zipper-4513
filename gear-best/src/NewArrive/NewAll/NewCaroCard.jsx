import React from 'react';
import styles from './newcarocard.module.css';
import Dotdotdot from 'react-dotdotdot';

const NewCaroCard = ({ price__1, image, price, id, title }) => {
    const discount = Number(price) - Number(price__1);
    const dis = (Math.sqrt(discount * Number(price__1)) / 100).toFixed(0);
    // console.log(price)
    // console.log(discount)
    return (
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
            <Dotdotdot clamp={2} useNativeClamp className={styles.carotitle}>
                {title}
            </Dotdotdot>
            {/* <div className={styles.discount}>
                <span style={{ fontSize: "17px", color: "white" }}>{dis}%</span>
                <span style={{ fontSize: "14px", color: "white" }}>OFF</span>
            </div> */}
        </div>
        <div className={styles.detailsWrapper}>
            <div className={styles.details}>
                <p style={{ fontSize: "14px", color: "red" }}>RRP: <span>${price}</span></p>
                {/* <p style={{ fontSize: "20px", color: "red" }}>${price__1}</p> */}
            </div>
            <img className={styles.cardimg} src={image} alt="icon" />
        </div>
      </div>
    );
}

export default NewCaroCard