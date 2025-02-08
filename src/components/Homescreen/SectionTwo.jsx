import "../HomescreenCss/SectionTwo.css";
import React, { useState } from 'react';
import Modal from '../Modal/SectionTwoModals.jsx';
import bowIcon from "../../assets/bow.png"
import heartIcon from "../../assets/heart.png";
import butterflyIcon from "../../assets/butterfly.png";
import starIcon from "../../assets/star.png";
import heartIcon2 from "../../assets/heart2.png";
export const SectionTwo = () => {
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const openModal1 = () => setIsModalOpen1(true);
  const closeModal1 = () => setIsModalOpen1(false);  
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false); 
  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);
   
  return (
        <div className="secondSection">
        <div className="flexBox">
          <button class = "box" onClick={openModal1}>
            <h1>PROMPTS TO JOURNAL
            </h1>
            <img  src = {bowIcon} alt = "bow" />
          </button>
          <button class = "box" onClick={openModal2}>
            <h1>GIFT INSPO</h1>
            <img  src = {heartIcon2} alt = "heart2" id = "heart" />
            </button>
          <button class = "box" onClick={openModal3}>
            <h1>SELF DATE INSPO</h1>
            <img src = {butterflyIcon} alt = "butterfly" id = "butterfly" />
            </button>
          <Modal isOpen={isModalOpen1} onClose={closeModal1}>
            <p> modal open 1</p>
          </Modal>
          <Modal isOpen={isModalOpen2} onClose={closeModal2}>
            <p> modal open 2</p>
          </Modal>
          <Modal isOpen={isModalOpen3} onClose={closeModal3}>
            <p> modal open 3</p>
          </Modal>
        </div>
        
      </div>
    )
}