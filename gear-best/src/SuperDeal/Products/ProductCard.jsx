import styles from "./ProductCard.module.css";
import {Link} from "react-router-dom";

const ProductCard = ({ newPrice, image, price, id, title , avatar ,last_name}) => {
  const discount = Number(price) - Number(newPrice);
  const dis = ((discount / Number(price)) * 100).toFixed(0);
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.discount}>
          <span style={{ fontSize: "17px", color: "white" }}>{dis}%</span>
          <span style={{ fontSize: "14px", color: "white" }}>off</span>
        </div>
        <Link to={`/superDeal/${id}`}>
          <img src={avatar} alt="" />
        </Link>
      </div>

      <div>
        <Link to={`/superDeal/${id}`}>
          <p className={styles.titleP}>{last_name}</p>
        </Link>
        <span style={{ fontSize: "17px", color: "red", cursor: "default" }}>
          ${newPrice}
        </span>
        <br />
        <span style={{ fontSize: "13px", color: "grey" }}>RRP:</span>
        <span style={{ fontSize: "13px", color: "grey" }}>
          <del style={{ cursor: "default" }}>${price}</del>
        </span>
      </div>
    </div>
  );
};
export default ProductCard;
