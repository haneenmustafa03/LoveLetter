import "../HomescreenCss/SectionTwo.css";
import React, { useState } from 'react';

import heartIcon from "../../assets/heart.png";

import starIcon from "../../assets/star.png";

import {Journal} from "./ModalTiles/Journal.jsx";
import {Gifts} from "./ModalTiles/Gifts.jsx";
import {Dates} from "./ModalTiles/Dates.jsx";
export const SectionTwo = () => {
  return (
        <div className="secondSection">
        <div className="flexBox">
            <Journal/>
            <Gifts/>
            <Dates/>
        </div>
        
      </div>
    );
}