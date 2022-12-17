import React from 'react'

import Collection from '../ShowProducts/Collection1';
import Collection2 from '../ShowProducts/Collection2';
import Row1 from '../ShowProducts/Row1';
// import Row2 from '../ShowProducts/Row2';



function HomePage() {
  return (
    <div>
     
     <Collection/>
     <Row1/>
     <Collection2/>
     {/* <Row2/> */}
    
    </div>
  )
}

export default HomePage