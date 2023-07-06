// DO NOT DELETE
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BreedsSelect from "./BreedsSelect";

export const DogListContainer = () =>{
    const [breeds,setBreeds] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const dataList = data.message;
                setBreeds(dataList);
            })
    },[])

    
    const [selectedBreed,setSelectedBreed] = useState([]);

    const handleBreedChange = (newEvent) =>{
        setSelectedBreed(newEvent.target.value);
    };



    return(
        <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={handleBreedChange}/>
    )
}

export default DogListContainer;