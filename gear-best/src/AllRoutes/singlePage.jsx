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
                src="https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16457/goods_img_big-v3/b85f8302740e.jpg"
                alt=""
              />
            </div>
            <div>
              <div className={styles.SinglePageTitleDiv}>
                <p className={styles.SinglePageTitle}>
                  Xiaomi WOWSTICK 1F+ Electric Precision Screwdriver Kit
                  Rechargeable Cordless Power Screw Driver with LED Light for
                  Repairing Work - Grey
                </p>
              </div>
              <div className={styles.SinglePageFlashSale}>
                <p className={styles.SinglePageFlashTitle}>FLASH SALE</p>
              </div>
              <div className={styles.SinglePagePrice}>
                <p>
                  <span>Price :</span>
                  <span className={styles.SinglePagePriceSapan}>$37.99</span>
                  <span className={styles.SinglePageOff}>33% off</span>
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
