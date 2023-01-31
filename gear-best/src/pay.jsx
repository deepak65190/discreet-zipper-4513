import React from "react";
import styles from "./pay.module.css"
import { Input ,Stack ,InputRightElement ,InputGroup , Button} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom"
import { useToast } from "@chakra-ui/react";
const Pay= ()=>{
    let toast = useToast()
    let navigate= useNavigate()
    const [show, setShow] = React.useState(false);
   
     let items=  0 ;
   
    // React.useEffect(() => {
    //   setItem("");
    // }, [totalItem]);
    const handleClick = () => setShow(!show);
    const handleSubmit =()=>{
         toast({
           title: "Payment successfull",
           description: "thank you",
           status: "success",
           duration: 9000,
           isClosable: true,
         });
         localStorage.setItem("card",JSON.stringify(items))
navigate("/")
    }
    return (
      <>
        <div className={styles.paydiv}>
          <Stack p={10} spacing={3}>
            <Input type="text" placeholder="enter card holder name" size="lg" />
            <Input type="number" placeholder="enter card number" size="lg" />
            <Input type="date" placeholder="enter expiry date" size="lg" />
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>{" "}
            <Button colorScheme="teal" size="lg" onClick={handleSubmit}>
              submit
            </Button>
          </Stack>
        </div>
      </>
    );
}
export default Pay