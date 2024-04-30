import { createContext, useEffect, useState } from "react";

export const WizardContext = createContext([]);

export const WizardContextProvider = (props) => {
    const [wizards, getWizards] = useState([]);

    useEffect(() => {
        async function fetchWizards() {
          const response = await fetch('https://harry-potter-api-en.onrender.com/db');
          const data = await response.json();
          getWizards(data.characters);
        };
        fetchWizards();
      }, [])
    
    return (
        <WizardContext.Provider value = {{wizards}}>
            {props.children}
        </WizardContext.Provider>
    )
}