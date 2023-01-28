import { Icon, SearchIcon } from '@chakra-ui/icons';
import { Button, Center } from '@chakra-ui/react';
import React,{useEffect, useState,useRef} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';
import {useThrottle} from 'use-throttle';


function SearchInput({queryHandler,suggestions}) {

  const [input,setInput]= useState('');
  const [activeOption,setActiveOption]= useState(0);
  const scrollDiv= useRef();

  const handleInputChange = (e) =>{
    setInput(e.target.value);
  }

  const handleActiveSuggestions= (e) =>{
    // downArrow- 40
    // upArrowkey- 38
    switch(e.keyCode){
      case 38:
        if(activeOption === 1){
          scrollDiv.current. scrollTop= suggestions.length * 101;
          setActiveOption(suggestions.length);
        }
        else if(activeOption <= suggestions.length -2){
          scrollDiv.current.scrollTop -= 101
        }
        if(activeOption > 1){
          setActiveOption((prev) => prev -1);
        }
        
        break;

      case 40:
        if(activeOption === suggestions.length){
          scrollDiv.current.scrollTop = 0;
          setActiveOption(0);
        }
        else if(activeOption >= 2){
          scrollDiv.current.scrollTop += 101;
        }
        setActiveOption((prev) => prev +1);
        break;

      default:
        return;
    }
  }

  const throttleText= useThrottle(input,1000)

  useEffect(() =>{
    queryHandler(throttleText);

  },[input,queryHandler]);

  return (
     <Wrapper onKeyUp={handleActiveSuggestions}>
        <SearchBarWrapper>
          <Input placeholder='Search products...' value={input} onChange={handleInputChange} />
          {/* <SearchIcon /> */}
          <Button h="100%" borderRightRadius="30px" borderLeftRadius="0" p="0px 10px" color="white" backgroundColor='#0069ff'> 
               <Center>
                <Icon boxSize="2rem" as={AiOutlineSearch}></Icon>
              </Center>
            </Button>
      </SearchBarWrapper>
     
      <SuggestionBox 
      limit={3} 
      suggestionsLength={suggestions.length}
      active={activeOption}
      ref={scrollDiv}
      >
      {suggestions.map((item,index) => {
        
        return (<div 
        key={index} 
        onMouseOver={() => setActiveOption(index+1)}
        >{item}</div>
        );
      } )}
      </SuggestionBox>
      </Wrapper>
    
  )
}

export default SearchInput;

const SuggestionBox= styled.div`
border:1px solid black;
zIndex:1;
// opacity:1;
background:#fff;
position:absolute;
overflow:hidden;
width:400px;
max-height:${({limit}) => `${limit * 101}px`};
border-top-color:${({limit}) => (limit ? 'transparent' : 'black')};
border-bottom-color:${({suggestionsLength}) => (suggestionsLength ? 'black' : 'transparent')};
//overflow:auto;

& *{
  padding:5px;
  text-align:left;
  padding-left:20px;
}

& :nth-child(${({active}) => active}){
  background: rgba(0, 0, 0, 0.09);
  cursor: pointer;
}
`

const SearchBarWrapper = styled.div`
display:flex;
// border:1px solid yellow;
border-radius:80px;
// padding:5px;
width:400px;
`

const Input= styled.input`
flex:1;
fontSize:20px;
border:none;
outline:none;
padding-left:20px;
border-radius:20px 0px 0px 20px;
// margin:auto;
background-color:#f0f1f4;

// h="100%";
// w="150vw";
// className="NavInput";
// maxW="400px";
// borderLeftRadius="25px";
// borderWidth="0px";
// fontSize="1rem";
// placeholder="Product Tag";
// py="-4px"
`

const Wrapper= styled.div`
 max-width:800px;
 margin:auto;
`
