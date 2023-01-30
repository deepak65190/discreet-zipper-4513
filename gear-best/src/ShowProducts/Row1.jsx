import React from "react";
import "./Row1.css";
import { Link } from "react-router-dom";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {FaFileInvoiceDollar} from "react-icons/fa";

function Row1() {
  return (
    <section id='superDeal'>
    <div style={{width:"80%",margin:"auto"}}>
      <HStack ml="15px" gap="28px" mb="20px" >
        <Icon boxSize="30px" as={FaFileInvoiceDollar} />
        <Text fontSize="1.5rem" fontWeight="bold">
          {" "}
          SUPER DEALS
        </Text>
      </HStack>
      <div className="third-div-title-image" w="80%">
        <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://www.gearbest.com/u_file/2212/15/products/3509769a46.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240"
                alt=""
              />
              <p>Global Version 2022 New i14 Pro Max 7.3 Inch Smartphones 16GB+1TB 8000mAh 4G/5G </p>
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>$144.99</p>
              </div>
              <div className="offer-price">
                <del>RRP: $290.00</del>
              </div>
              <div className="discount">50% OFF</div>
            </div>
          </div>
        </Link>
        <Link to="/products">
          {" "}
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://www.gearbest.com/u_file/2301/13/products/SKU-01-128GBBlack-b92d.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
                alt=""
              />
              <p>Global Version M11 Ultra Smartphones Android 7.3 inch Mobile Phones 16GB RAM 1TB ROM</p>
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>$117.99</p>
              </div>
              <div className="offer-price">
                <del>RRP: $240.00</del>
              </div>
              <div className="discount">51% OFF</div>
            </div>
          </div>
        </Link>
        <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://www.gearbest.com/u_file/2212/14/products/702271c92e.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
                alt=""
              />
              <p>Original Xiaomi Fire Smoke Alarm Support Remote Control Smoke Sense Guard Fire Smoke Alarm Detector</p>
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>$27.99</p>
              </div>
              <div className="offer-price">
                <del>RRP: $37.49</del>
              </div>
              <div className="discount">25% OFF</div>
            </div>
          </div>
        </Link>
        <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://www.gearbest.com/u_file/2301/14/products/Main-01-827d.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500"
                alt=""
              />
              <p>Ashiboogoole Wireless Bluetooth Speaker FM Radio Sound Box Desktop Alarm Clock Subwoofer Music Player</p>
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>$19.95</p>
              </div>
              <div className="offer-price">
                <del>RRP: $39.98</del>
              </div>
              <div className="discount">50% OFF</div>
            </div>
          </div>
        </Link>
        {/* <Link to="/products">
          <div className="third-div-title-images">
            <div className="third-div-title-images1">
              <img
                src="https://img.gkbcdn.com/p/2019-11-30/tws-i500-earphones-20191130100234539._w280_p1_.jpg"
                alt=""
              />
            </div>
            <div className="third-div-title-images-price">
              <div className="product-price">
                <p>₹1178.56</p>
              </div>
              <div className="offer-price">
                <del>₹1964.79</del>
              </div>
              <div className="discount">40% OFF</div>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
    </section>
  );
}

export default Row1;
