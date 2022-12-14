
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
  
import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: right;
   color: rgb(2,136,209);
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 2500px;
`;
  
export const Button = styled.div`
   position: fixed; 
   width: 100%;
   left: 93%;
   bottom: 60px;
   height: 30px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #1988cd;
`


const Btn_backTop = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
   
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
     <FaArrowCircleUp  onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
  );
}
  
export default Btn_backTop;