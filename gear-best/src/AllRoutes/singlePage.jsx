import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SinglePage.module.css";
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SinglePage = () => {
  const { productId } = useParams();
  const [userDetails, setUserDetails] = React.useState({});

  React.useEffect(() => {
    getData(
      `https://database-json-server.vercel.app/allData/${productId}`
    ).then((res) => setUserDetails(res));
  }, [productId]);

  return (
    <>
      <div>
        <section>
          <div className={styles.SinglePageSeciont}>
            <div>
              <img
                className={styles.singlePageimg}
                src={userDetails.image}
                alt=""
              />
            </div>
            <div>
              <div className={styles.SinglePageTitleDiv}>
                <p className={styles.SinglePageTitle}>
                 {userDetails.title}
                </p>
              </div>
              <div className={styles.SinglePageFlashSale}>
                <p className={styles.SinglePageFlashTitle}>FLASH SALE</p>
              </div>
              <div className={styles.SinglePagePrice}>
                <p>
                  <span>Price :</span>
                  <span className={styles.SinglePagePriceSapan}>${userDetails.price}</span>
                  <span className={styles.SinglePageOff}>{userDetails.discount}% off</span>
                </p>
              </div>
              
              <div className={styles.SinglePageCBPbtn}>
                <button>Add To Cart</button>
                <button>Buy Now</button>
                <button>PayPal</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePage;
