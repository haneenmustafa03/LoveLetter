import Modal from '../../Modal/SectionTwoModals.jsx';
import "../../HomescreenCss/SectionTwo.css";
import bowIcon from "../../../assets/bow.png";
import React, { useState, useEffect } from 'react';

export const Journal = () => {
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const [prompts, setPrompts] = useState([]);
    const [randomPrompts, setRandomPrompts] = useState([]);

    const openModal1 = () => setIsModalOpen1(true);
    const closeModal1 = () => {
        setIsModalOpen1(false)  
        setRandomPrompts([]); 
        };

    const getPromptIdeas = async () => {
        const response = await fetch('src/assets/prompts.txt');
        const text = await response.text();
        const promptsArray = text.split('\n').map(line => line.trim()).filter(line => line !== "");
        setPrompts(promptsArray);
    };

    useEffect(() => {
        getPromptIdeas(); 
      }, [])

    const generateRandomPrompts = () => {
        if (prompts.length > 0) {
            const shuffledPrompts = [...prompts].sort(() => 0.5 - Math.random());
            setRandomPrompts(shuffledPrompts.slice(0, 5));
        }
    }
    return (
        <div>
            <button class = "box" onClick={openModal1}>
            <h1>PROMPTS TO JOURNAL
            </h1>
            <img  src = {bowIcon} alt = "bow" />
            </button>
            <Modal isOpen={isModalOpen1} onClose={closeModal1} className="modal-journal">
            <h2>Randomly Generated Journal Prompts</h2>
            <button className= "generatorButton" onClick={generateRandomPrompts}>Generate Random Prompts</button>
            <ul>
                {randomPrompts.map((prompt, index) => (
                    <li key={index}>{prompt}</li>
                ))}
                
            </ul>
            
            
        </Modal>
        </div>
        
    );
};
