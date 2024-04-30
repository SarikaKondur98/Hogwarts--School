import React, { useState } from "react";
import { useContext, useReducer } from "react";
import { WizardContext } from "../../../context/Medium";


export const Red = () => {
    const wizardArray = useContext(WizardContext);
    const initialWizardData = wizardArray.wizards;
    const [display, setDisplay] = useState(false);

    const reducer = (initialWizardData, action) => {
        if (action.type === 'sort') {
           const sortedArray = [...initialWizardData].filter((wiz) => {
              if (wiz.hogwartsHouse === 'Gryffindor') {
                return wiz.character;
              }
           });
           return sortedArray;
        } 
        return initialWizardData;
    };

    const [wizards, dispatch] = useReducer(reducer, initialWizardData);
    const sortStudents = () => {
        dispatch({ type: 'sort' });
        setDisplay(true);
    };


    return (
        <div>
            <h1>Welcome to Gryffindor Common room</h1>

            <button onClick={() => {
                sortStudents();
            }}>Sort Students</button>

            {display && wizards.map(wiz => (
                <div key={wiz.id}>
                    <p>{wiz.character}</p>
                </div>
            ))}
        </div>
    )
}