import React from "react";
import { Data } from "../../data";
import { useState } from "react";
import { ModalStyled } from "./style";

export const Modal = ({ city }) => {
  return (
    <ModalStyled>
      {Data?.map((item, index) => {
        if (item[1] === city) {
          return <div key={index}>{item[0]}</div>;
        }
      })}
    </ModalStyled>
  );
};
