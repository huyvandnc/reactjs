import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
   z-index: 200;
   position: fixed;
   display: ${props => props.isActive ? 'flex' : 'none'};
   justify-content: center;
   align-items: center;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background: white;
`;

const loading = keyframes`
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
`;

const DotLoading = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

const Div = styled.div`
  position: absolute;
  background: #435a6f;
  opacity: 1;
  border-radius: 50%;
  animation: ${loading} 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  &:nth-child(2) {
    animation-delay: -.7s;
  }
`;

const Welcome = () => {
  const [isActive, toggleActive] = useState(true);
  useEffect(() => {
    setTimeout(() => { toggleActive(false) }, 2300);
  }, []);
  return (<Container isActive={isActive}><DotLoading><Div/><Div/></DotLoading></Container>);
}

export default Welcome;