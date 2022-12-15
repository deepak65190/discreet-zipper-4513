import styles from "./navbar.module.css";
import React from "react";
import Deal from "./Deal";
import Deal1 from "./Deal1";
import Deal2 from "./Deal2";
const Navbar = () => {
  return (
    <div style={{position:"sticky"}}>
      <div className={styles.category}>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/image/2019/20190417_9244/supDeals.png"
            alt=""
          />
          <span> Flash Sales</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/All%20Flash%20Sales.png?imbypass=true"
            alt=""
          />
          <span>All Flash Sales</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/Exclusive%20Brands.png?imbypass=true"
            alt=""
          />
          <span>Exclusive Brands</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/Mobile%20Phones1.png"
            alt=""
          />
          <span>Mobile Phones</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/Electronics1.png?imbypass=true"
            alt=""
          />
          <span>Electronics</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/Toys,%20Baby%20&%20Kids11.png?imbypass=true"
            alt=""
          />
          <span>Toys,Baby & Kids</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/Computer%20&%20Office11.png?imbypass=true"
            alt=""
          />
          <span>Computer & Office</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/Electrical%20&%20Tools1.png?imbypass=true"
            alt=""
          />
          <span>Electrical & Tools</span>
        </div>
        <div>
          <img
            src="https://uidesign.gbtcdn.com/GB/images/others/top_brands/Appliances11.png?imbypass=true"
            alt=""
          />
          <span>Appliance</span>
        </div>
      </div>
      <div className={styles.countdown}>
        <div>
          <span> Ends in:</span>
          <Deal />
        </div>
        <div>
          <span> Ends in:</span>
          <Deal1 />
        </div>
        <div>
        <span> Coming Soon:</span>
          <Deal2 />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
