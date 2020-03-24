import React from 'react';
import styled from 'styled-components';

const ButtonComp = styled.button `
    background-color: #1a75bc;
    border: 1px solid #FFF;
    padding: 5px;
    border-radius: 6px;
    color: #FFF;
`
const Button = ({ mensaje, estilo }) => {
  return(
    <ButtonComp className={estilo}>{mensaje}</ButtonComp>
  )
};

export default Button;