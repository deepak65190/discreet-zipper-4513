import React from "react";
import { Box ,Text } from "@chakra-ui/react";
import styles from "./Card.module.css"
const Empty = () => {
  return (
    <>
      <div className={styles.emptyDiv}>
        <h1></h1>
        <Text fontSize="6xl"> Cart is Empty !!</Text>
        <Text fontSize="6xl"> add product to the cart</Text>
       
      </div>
    </>
  );
};
export default Empty
