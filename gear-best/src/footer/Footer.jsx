import React from "react";
import { Input } from "@chakra-ui/react";
import { RiHomeWifiLine } from "react-icons/ri";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaShippingFast, FaBlogger, FaTiktok } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import {
  BsFacebook,
  BsMessenger,
  BsYoutube,
  BsPinterest,
  BsInstagram,
  BsTwitter,
  BsSnapchat,
} from "react-icons/bs";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerHomeScroll}>
        <div>
          <img
            className={styles.websiteLogoImage}
            src="https://css.gbtcdn.com/imagecache/gbw/img/site/new-logo.png"
            alt="image"
          />
          <h3 className={styles.logoFont}>AFFORTDBEL QUALITY FUN SHOPPING</h3>
        </div>
        <div>
          <RiHomeWifiLine className={styles.homeLogo} size={30} />
          <p className={styles.hightQualitySec}>High Quality Selection </p>
          <p className={styles.totalProductQuality}>
            Total product quality control for peace of mind
          </p>
        </div>
        <div>
          <FaRegThumbsUp className={styles.homeLogo} size={30} />
          <p className={styles.hightQualitySec}>Affordable Prices </p>
          <p className={styles.totalProductQuality}>
            Factory direct prices for maximum savings
          </p>
        </div>
        <div>
          <FaShippingFast className={styles.homeLogo} size={30} />
          <p className={styles.hightQualitySec}>Express Shipping </p>
          <p className={styles.totalProductQuality}>
            Fast, reliable delivery from global warehouses
          </p>
        </div>
        <div>
          <AiOutlineStar className={styles.homeLogo} size={30} />
          <p className={styles.hightQualitySec}>Worry-free After-sales</p>
          <p className={styles.totalProductQuality}>
            Instant access to professional support
          </p>
        </div>
      </div>
      <div className={styles.footerInputSub}>
        <div className={styles.inputboxWithL}>
          <div>
            <span className={styles.newLetter}>Newsletter</span>
            <input className={styles.inputboxsub}
              placeholder="Enter Email to get 50 Points"
              
            />
            <button className={styles.sub}>SUBCRIBE</button>
          </div>

          <div>
            <ul className={styles.footerSocailMediaL}>
              <li>
                <BsFacebook size={25} />
              </li>
              <li>
                <BsMessenger size={25} />
              </li>
              <li>
                <BsYoutube size={25} />
              </li>
              <li>
                <BsPinterest size={25} />
              </li>
              <li>
                <BsInstagram size={25} />
              </li>
              <li>
                <BsTwitter size={25} />
              </li>
              <li>
                <FaBlogger size={25} />
              </li>
              <li>
                <BsSnapchat size={25} />
              </li>
              <li>
                <FaTiktok size={25} />
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerabout}>
          <div>
            <p className={styles.ccod}>Company Information</p>
            <ul className={styles.ccodUl}>
              <li>About Us</li>
              <li>Top Searches</li>

              <li>Privacy Policy</li>
              <li>Terms and Conditions </li>
              <li> Intellectual Property Policy </li>
              <li>Testimonials</li>
              <li>Contact Us</li>
              <li> Report Security Issue </li>
              <li> Sell on Gearbest</li>
              <li>Cookies Policy </li>
              <li> Top Brands</li>
              <li>Gearbest Official Blog</li>
            </ul>
          </div>
          <div>
            <p className={styles.ccod}>Customer Service</p>
            <ul className={styles.ccodUl}>
              <li>Customer Service</li>
              <li>Shipping Information</li>

              <li> My Favorites </li>
              <li>FAQ For Newsletter Subscription </li>
              <li> My Points </li>
              <li>Warranty and Return </li>
              <li>Payment Methods</li>
              <li> Deposit Expansion </li>
              <li> FAQ & Supportt</li>
              <li> Gearbest Wallet </li>
              <li> Instruction</li>
              <li>FAQs about COVID-19</li>
            </ul>
          </div>
          <div>
            <p className={styles.ccod}>Other Business</p>
            <ul className={styles.ccodUl}>
              <li>Associate Program</li>
              <li>Partnership Programs </li>
            </ul>
          </div>
          <div>
            <p className={styles.ccod}>Download App!</p>
            <ul className={styles.ccodUl}>
              <li>Save $3 with App & New User Only</li>
            </ul>
            <div className={styles.qrPstore}>
              <div>
                <img
                  src="https://stupendous-dasik-d1b526.netlify.app/qr.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://stupendous-dasik-d1b526.netlify.app/dub.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerAllPayLogo}>
        <div>
          <ul className={styles.paymentUl}>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/money.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/m.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/rese.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/sofort.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/pago.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/jcb.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/oxxo.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/bo.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/d.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/p.png"
                alt=""
              />
            </li>

            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png"
                alt=""
              />
            </li>
            <li>
              <img
                className={styles.payImage}
                src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/postepay.png"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerCopyRight}>
        Copyright © 2014-2022 Gearbest.com. All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
