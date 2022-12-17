import React from "react";
import "./Row1.css";
import { Link } from "react-router-dom";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {FaFileInvoiceDollar} from "react-icons/fa";

function Row1() {
  return (
    <div style={{width:"90%",margin:"auto"}}>
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
                src="https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16663/goods_thumb_220-v3/d11711787acb.jpg"
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
                src="https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16584/goods_thumb_220-v3/7d7a74f9044c.jpg"
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
                src="https://gloimg.gbtcdn.com/soa/gb/store/6878400698325856256/16414/goods_thumb_220-v3/62f163437481.jpg"
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
                src="https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_thumb_220-v1/9338ff0d7622.jpg"
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
  );
}

export default Row1;
