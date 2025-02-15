import Modal from '../../Modal/SectionTwoModals.jsx';
import "../../HomescreenCss/SectionTwo.css";
import butterflyIcon from "../../../assets/butterfly.png";
import React, { useState, useEffect } from 'react';

export const Dates = () => {
    const [isModalOpen3, setIsModalOpen3] = useState(false);
    const [ideas, setIdeas] = useState([]);
    const [randomIdeas, setRandomIdeas] = useState([]);

    const openModal3 = () => setIsModalOpen3(true);
    const closeModal3 = () => {
        setIsModalOpen3(false);  
        setRandomIdeas([]);}

    const getDateIdeas = async () => {
        const response = await fetch('src/assets/date_ideas.txt');
        const text = await response.text();
        const ideasArray = text.split('\n').map(line => line.trim()).filter(line => line !== "");
        setIdeas(ideasArray);
    };

    useEffect(() => {
        getDateIdeas(); 
      }, [])

    const generateRandomIdeas = () => {
        if (ideas.length > 0) {
            const shuffledIdeas = [...ideas].sort(() => 0.5 - Math.random());
            setRandomIdeas(shuffledIdeas.slice(0, 5));
        }
    }

    return (
    <div>
      <button className="box" onClick={openModal3}>
        <h1>SOLO DATE IDEAS</h1>
        <img src={butterflyIcon} alt="butterfly" id="butterfly" />
      </button>
      <Modal isOpen={isModalOpen3} onClose={closeModal3} className="modal-dates">
    <div className="modal-content-wrapper">
        <h2>solo date ideas !</h2>
        <div className="ideas-container">
            <ul>
                {randomIdeas.map((idea, index) => (
                    <li key={index}>{idea}</li>
                ))}
            </ul>
        </div>
        <div className="button-container">
            <button className="generatorButton" onClick={generateRandomIdeas}>
                Generate Ideas
            </button>
        </div>
    </div>
</Modal>
    </div>
  );
};

export default Dates;
