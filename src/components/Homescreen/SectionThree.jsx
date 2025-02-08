import "../HomescreenCss/SectionThree.css";
import React, { useState } from "react";


const resources = {
    legal: [
        { name: "Women's Law", link: "https://www.womenslaw.org/" },
        { name: "National Domestic Violence Hotline", link: "https://www.thehotline.org/"},
    ],
    mentalhealth: [
        { name: "Mental Health America", link: "https://www.mhanational.org/"},
        { name: "National Alliance on Mental Illness", link: "https://www.nami.org/"},
    ],
    housing: [
        { name: "National Coalition for the Homeless", link: "https://www.nationalhomeless.org/"},
        { name: "Shelter Listings", link: "https://www.shelterlistings.org/"},
    ],
    supportGroups:
    [
        { name: "Support Groups for Women", link: "https://www.supportgroups.com/"},
        { name: "Women’s Refuge", link: "https://www.womensrefuge.org.nz/" },
    ],
    abortion: [
        { name: "Planned Parenthood", link: "https://www.plannedparenthood.org/" },
        { name: "National Abortion Federation", link: "https://www.prochoice.org/" },
      ],
    };

    export const SectionThree = () => {
      const [openCategory, setOpenCategory] = useState(null);
  
      // Toggle function to show/hide resources
      const toggleCategory = (category) => {
          setOpenCategory(openCategory === category ? null : category);
      };
  
      return (
          <div className="resource-container">
              <h2 className="section-title">Lets get serious</h2>
              <small className="title-caption">At Love Letter, our mission is to support and uplift women. If at any point you find yourself
                in need of help, please refer to the many resources we have linked. If you are experiencing
                an emergency, please contact 911.  </small>
  
              <div className="tiles-container">
                  {Object.keys(resources).map((category, index) => (
                      <div key={index} className="resource-tile" onClick={() => toggleCategory(category)}>
                          <h3 className="tile-title">
                              {category === "legal" ? "Legal Help" :
                               category === "mentalhealth" ? "Mental Health" :
                               category === "housing" ? "Housing" :
                               category === "supportGroups" ? "Support Groups" :
                               category === "abortion" ? "Abortion Resources" : category}
                          </h3>
  
                          {/* Show resources when the tile is clicked */}
                          {openCategory === category && (
                              <div className="resource-list">
                                  {resources[category].map((resource, i) => (
                                      <a key={i} href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                                          {resource.name}
                                      </a>
                                  ))}
                              </div>
                          )}
                      </div>
                  ))}
              </div>
          </div>
      );
  };
  