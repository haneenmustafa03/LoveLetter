import Modal from '../../Modal/SectionTwoModals.jsx';
import "../../HomescreenCss/SectionTwo.css";
import bowIcon from "../../../assets/bow.png";
import React, { useState } from 'react';

export const Journal = () => {
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const openModal1 = () => setIsModalOpen1(true);
    const closeModal1 = () => setIsModalOpen1(false);  
    return (
        <div>
            <button class = "box" onClick={openModal1}>
            <h1>PROMPTS TO JOURNAL
            </h1>
            <img  src = {bowIcon} alt = "bow" />
            </button>
            <Modal isOpen={isModalOpen1} onClose={closeModal1}>
            <p> modal open 1</p>
            
        </Modal>
        </div>
        
    );
};
