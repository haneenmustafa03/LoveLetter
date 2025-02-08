import Modal from '../../Modal/SectionTwoModals.jsx';
import "../../HomescreenCss/SectionTwo.css";
import heartIcon2 from "../../../assets/heart2.png";
import React, { useState } from 'react';
export const Gifts = () => {
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);  
    return (
        <div>
            <button class = "box" onClick={openModal2}>
            <h1>GIFT INSPO</h1>
            <img  src = {heartIcon2} alt = "heart2" id = "heart" />
            </button>
            <Modal isOpen={isModalOpen2} onClose={closeModal2}>
            <p> modal open 2</p>
            
        </Modal>
        </div>
        
    );
};