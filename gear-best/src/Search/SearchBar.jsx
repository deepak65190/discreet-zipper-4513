import React,{useCallback, useEffect, useState} from 'react'
import SearchInput from './SearchInput';
import allData from '../utils/allData';

function SearchBar() {

const [query,setQuery]= useState('');
const [suggestions,setSuggestions]= useState([]);

const queryHandler= useCallback((value) =>{
 setQuery(value);
},[])

useEffect(() =>{
 if(query === ''){
  setSuggestions([]);
 }
 else{
   let textQuery= query.trim().toLowerCase() 
   let newSuggestion=allData.filter((item) => {
    return item.title.toLowerCase().indexOf(textQuery) !== -1 ? true:false;
   })
   .map((item) => item.title);
   setSuggestions(newSuggestion);
 }
},[query])

  return (
    <div>
      <SearchInput queryHandler={queryHandler} suggestions={suggestions} /> 
    </div>
  )
}

export default SearchBar;