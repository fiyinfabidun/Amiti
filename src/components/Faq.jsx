import React from 'react'
import { useState } from 'react'

function Faq({question,answer}) {
    const [isShow, SetShow] = useState(false)
  return (
    <>

     <div  onClick={()=> SetShow(!isShow)} 
   className={isShow? 'act-faq' : 'faq'}  >
        <div className="faq-question">
        <h2>{question}</h2>
        {isShow?  
           <i class="fa-solid fa-minus" style={{color:'#fff'}} ></i>  : <i className="fa-solid fa-plus" style={{color:'#905a23'}}></i>}
        </div>
        {isShow && <p>{answer}</p> }
     </div>
    </>
  )
}


export default Faq