// DO NOT DELETE
import React from "react";

export const BreedsSelect = ({breeds,selectedBreed,onBreedChange}) => {




    return (
        <>
            <select value={selectedBreed} onChange={onBreedChange}>
                <option value=""></option>
                {Object.values(breeds).map((breed) => (
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                    ))};
            </select>
        </>
    )
    
}

export default BreedsSelect;