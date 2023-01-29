import React ,{useState} from "react"
import styles from "./newFooter.module.css"
import image1 from "./nf.png"
import {
    Box ,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
const NewFooter= ()=>{
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email: ", email);
    setEmail("");
  };
    return (
      <>
        <div className={styles.footerContainer}>
          <div className={styles.contactSec}>
            <div>
              <h1 className={styles.h3footer}>Company Information</h1>
              <ul className={styles.ulOfCompany}>
                <li>About us</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
                <li>Intellectual Property Policy</li>
                <li>Contact Us</li>
                <li>Cookies Policy</li>
              </ul>
            </div>
            <div>
              <h3 className={styles.h3footer}>Customer Services</h3>
              <ul className={styles.ulOfCompany}>
                <li>Shipping Information</li>
                <li>FAQ For Newsletter Subscription</li>
                <li>Warranty and Return</li>
                <li>Payment Methods </li>
                <li>FAQ & Support </li>
              </ul>
            </div>
            <div>
              <h3 className={styles.h3footer}>Contact Us</h3>
              <ul className={styles.ulOfCompany}>
                <li>support@gearbest.com</li>
              </ul>
            </div>

            <div>
              <h3 className={styles.h3footer}>Newsletter</h3>
              <form  onSubmit={handleSubmit}>
                <input
                  className={styles.inputOfFooter}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your email address"
                />
                <div className={styles.subsBtn}>
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className={styles.copyWriteSec}>
            <div>Copyright © 2014-2023 Gearbest.com. All Rights Reserved.</div>
            <div>
              <img src={image1} alt="image" />
            </div>
          </div>
        </div>
        <div className={styles.go}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className={styles.foterh2chakra}>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Company Information
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul className={styles.ulOfCompanySmll}>
                  <li>Shipping Information</li>
                  <li>FAQ For Newsletter Subscription</li>
                  <li>Warranty and Return</li>
                  <li>Payment Methods </li>
                  <li>FAQ & Support </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Customer Services
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul className={styles.ulOfCompanySmll}>
                  <li>Shipping Information</li>
                  <li>FAQ For Newsletter Subscription</li>
                  <li>Warranty and Return</li>
                  <li>Payment Methods </li>
                  <li>FAQ & Support </li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Contact Us
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <ul className={styles.ulOfCompanySmll}>
                  <li>support@gearbest.com</li>
                </ul>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <div className={styles.copyWriteSec}>
            <div className={styles.copuwriteg}>
              Copyright © 2014-2023 Gearbest.com. All Rights Reserved.
            </div>
            <div className={styles.footerPayType}>
              <img src={image1} alt="image" />
            </div>
          </div>
        </div>
      </>
    );
}
export default NewFooter