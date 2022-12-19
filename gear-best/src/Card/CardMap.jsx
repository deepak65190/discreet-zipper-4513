import React, { useState } from "react";
import styles from "./Card.module.css";
import { Button} from "@chakra-ui/react";
import {MdDelete} from "react-icons/md"
const CardMap = ({ data, handleDataChange }) => {

  const [add, setAdd] = useState(1);
  const handleAdd = () => {
    setAdd((pre) => pre + 1);
    handleDataChange(data.id, 1);
  };
  const handleReduse = () => {
    setAdd((pre) => pre - 1);
    handleDataChange(data.id, -1);
  };
  console.log(data)
  let p = data.price;
  let tp = p * add;

  //  const handleDelete = (id) => {
  //    const filt = getData.filter((item) => {
  //      return item.id !== id;
  //    });

  //  };
  return (
    <>
      <div className={styles.cardComponent}>
        <div>
          <img src={data.image} alt="image" />
        </div>
        <div>{/* <p className={styles.cartTitleN}>{data.title}</p> */}</div>
        <div>
          {/* <button  >
          +
        </button> */}
          <Button
            className={styles.inADDbtnCart}
            colorScheme="blue"
            onClick={() => handleDataChange(data.id, 1)}
          >
            +
          </Button>
          <Button>1</Button>
          <Button
            disabled={data.quantity === 1}
            className={styles.inADDbtnCart}
            colorScheme="blue"
            onClick={() => handleDataChange(data.id, -1)} 
            
          >
            -
          </Button>
        </div>
        <div>
          <Button colorScheme="blue" >${data.price} Total</Button>
        </div>
        <div>
          <button onClick={() => handleDelete(data.id)}>
            <MdDelete color="#3182CE" size={40} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardMap;
