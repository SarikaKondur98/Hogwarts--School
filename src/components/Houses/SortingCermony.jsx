import React from "react";

export const Home = ({sendWizards}) => {
    return (
        <div>
            <h1>Welcome to Hogwarts!</h1>
            {sendWizards.map(wiz => (
                <div key={wiz.id}>
                    <p>{wiz.character}</p>
                </div>
            ))}
        </div>
    )
}