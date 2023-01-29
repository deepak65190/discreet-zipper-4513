import React from "react";
//import CardMap from "./CardMap";
import styles from "./Card.module.css";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

const Card = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("card")) || []
  );
const toast = useToast();
  let length= items.length;
  localStorage.setItem("totalItem" ,JSON.stringify(length))
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i].price;
  }

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem("card", JSON.stringify(updatedItems));
        toast({
          title: 'deleted from your cart',
          
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      
  };
  const pay =()=>{
    console.log("hii") ;
      <Link to="/payment" />;
  }
  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.totalP}>
        Total price{" "}
        <span className={styles.pricelogo}>
          <FaRupeeSign />
        </span>
        {sum}
      </h1>

      <ul className={styles.cartContainerdiv}>
        {items.map((item, index) => (
          <li key={index}>
            <div className={styles.allp}>
              <div className={styles.imgp}>
                <img src={item.image} alt="" />
              </div>
              <div>
                <p>{item.title}</p>
              </div>
              <div>
                <p>
                  <span className={styles.pricelogo}>
                    <FaRupeeSign />
                  </span>
                  {item.price}
                </p>
              </div>
              <button
                className={styles.deleteBtn}
                onClick={() => handleDelete(index)}
              >
                <RiDeleteBinFill size={40} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.paybtn}>
        <Link to='/payment' />
        <Button colorScheme="teal" variant="solid">
          Proceed to pay
        </Button>
        <Link />
      </div>
    </div>
  );
};

export default Card;
{
  /* <div className={styles.cartContainer}>
     
      
    </div> */
}
//  <div className={styles.cartContainer}>
//    <h1 className={styles.totalP}>Total price {sum}</h1>
//    <div>
//      {getDataLocal?.map((el, ind) => (
//        <CardMap key={ind} {...el} />
//      ))}
//    </div>
//  </div>;
