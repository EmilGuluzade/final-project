import React from 'react'
import styled from 'styled-components';

import {Link} from "react-router-dom"


const PrimaryButton = styled.a`
  background-color: #17c6aa;
  color: white;
  font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    padding: 15px 30px;
    cursor: pointer;
    white-space: nowrap;
    border: 0 !important;
    border-radius: 4px;
    text-transform: uppercase;

    transition:0.3s;
  &:hover {
    color: #fff;
    outline: 0;
    background-color: #282828;
  }

  &:focus {
    outline: none;
  }

 
`;



export default PrimaryButton
