import OpenAI from "openai";
import Modal from '../../Modal/SectionTwoModals.jsx';
import "../../HomescreenCss/SectionTwo.css";
import heartIcon2 from "../../../assets/heart2.png";
import React, { useState, useEffect } from 'react';

export const Gifts = () => {
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModal2 = () => {
        setIsModalOpen2(true);
        fetchData(); // Fetch data when the modal opens
      };    
    const closeModal2 = () => setIsModalOpen2(false);  
    const apiUrl = import.meta.env.VITE_OPENAI_API_KEY;
    // const appName = import.meta.env.VITE_APP_NAME;
    console.log(apiUrl);
    const [response, setResponse] = useState(null);

    const fetchData = async () => {
      try {
        const openai = new OpenAI({ apiKey: apiUrl, dangerouslyAllowBrowser: true });

        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          store: true,
          messages: [{ role: "user", content: "give me 3 gift ideas for valentine's for myself very concise list " }],
        });

        setResponse(completion.choices[0].message.content);
      } catch (error) {
        console.error("Error fetching completion:", error);
      }
    };
      
    return (
        <div>
            <button class = "box" onClick={openModal2}>
            <h1>GIFT INSPO</h1>
            <img  src = {heartIcon2} alt = "heart2" id = "heart" />
            </button>
            <Modal isOpen={isModalOpen2} onClose={closeModal2} className="modal-gifts">
            <h2>Valentine's Day Gift Ideas (by your friend, chat)</h2>
            <p id = "chatgptText"> {response} </p>
        </Modal>
        </div>
        
    );
};