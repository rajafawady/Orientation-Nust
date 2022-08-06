import React from 'react'
import styled from "styled-components";

const Arrow = (type) => {
    const Button = styled.span`
    color: #f26e83;
    position: absolute;
    top: calc(50% - 17.5px);
    height: 35px;
    width: 35px;
    background: #12629e;
    border-radius: 50%;
    box-shadow: 0 0 5px 0 #0009;
    z-index: 10;
    cursor: pointer;
    font-size: 10px;
    opacity: 0.7;
    transition: opacity 0.25s;
    left: ${({ type }) => (type === "prev" ? "5px" : "initial")};
    right: ${({ type }) => (type === "next" ? "5px" : "initial")};

    &:hover {
      opacity: 1;
    }
    &::before {
      content: "";
      height: 10px;
      width: 10px;
      background: transparent;
      border-top: 2px solid #112e49;
      border-right: 2px solid #112e49;
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: ${({ type }) =>
        type === "prev"
          ? "translate(-25%, -50%) rotate(-135deg)"
          : "translate(-75%, -50%) rotate(45deg)"};
    }
  `;
  return <Button type={type} />;
}

export default Arrow
