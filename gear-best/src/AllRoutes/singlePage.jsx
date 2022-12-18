import React from "react";
import { useParams } from "react-router-dom";
import styles from "./SinglePage.module.css";
import { useToast } from "@chakra-ui/react";
import { Button} from "@chakra-ui/react";
const getData = (url) => {
  return fetch(url).then((res) => res.json());
};

const SinglePage = () => {
  const toast = useToast();
  const { productId } = useParams();
 
  const [userDetails, setUserDetails] = React.useState({});
let l = JSON.parse(localStorage.getItem("card")) ; 
  const [local ,setLocal] = React.useState(l||[]) ;
  console.log(local)
  const handleLocal = ()=>{
    setLocal([...local,{
      id:userDetails.id ,
      image :userDetails.image ,
      price :userDetails.price ,
      title:userDetails.title
    }]) ;
    // if(l.id)
   localStorage.setItem("card", JSON.stringify(local));
  }

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
                alt="image"
              />
            </div>
            <div>
              <div className={styles.SinglePageTitleDiv}>
                <p className={styles.SinglePageTitle}>{userDetails.title}</p>
              </div>
              <div className={styles.SinglePageFlashSale}>
                <p className={styles.SinglePageFlashTitle}>FLASH SALE</p>
              </div>
              <div className={styles.SinglePagePrice}>
                <p>
                  <span>Price :</span>
                  <span className={styles.SinglePagePriceSapan}>
                    ${userDetails.price}
                  </span>
                  <span className={styles.SinglePageOff}>
                    {userDetails.discount} % off
                  </span>
                </p>
              </div>

              <div className={styles.SinglePageCBPbtn}>
                {/* <Button
                  onClick={() =>
                    toast({
                      title: "Add into Card",
                   
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  Add to Card
                </Button> */}
                <button onClick={handleLocal}>add to card</button>
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
