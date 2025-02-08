import Modal from '../../Modal/SectionTwoModals.jsx';
import "../../HomescreenCss/SectionTwo.css";
import butterflyIcon from "../../../assets/butterfly.png";
import React, { useState } from 'react';
export const Dates = () => {
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const openModal3 = () => setIsModalOpen3(true);
    const closeModal3 = () => setIsModalOpen3(false);  
    return (
        <div>
            <button class = "box" onClick={openModal3}>
            <h1>SELF DATE INSPO</h1>
            <img src = {butterflyIcon} alt = "butterfly" id = "butterfly" />
            </button>
            <Modal isOpen={isModalOpen3} onClose={closeModal3}>
            <p> modal open 3</p>
            
        </Modal>
        </div>
        
    );
};