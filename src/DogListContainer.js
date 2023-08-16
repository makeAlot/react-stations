// DO NOT DELETE
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import BreedsSelect from "./BreedsSelect";
import DogImage from "./DogImage";

export const DogListContainer = () =>{
    const [breeds,setBreeds] = useState([])

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const names = getDogName(data);
                setBreeds(names);
            })
    },[])

    const getDogName = (data) =>{
        const names = [];

        for (const breed in data.message){
            if(data.message.hasOwnProperty(breed)){
                const subBreeds = data.message[breed];

                if (subBreeds.length > 0){
                    for(const subBreed of subBreeds){
                        const name =`${subBreed}${breed}`;
                        names.push(name);
                    }
                }else{
                    names.push(breed);
                }
            }
        }
        return names;
    }


    
    const [selectedBreed,setSelectedBreed] = useState([]);

    const handleBreedChange = (newEvent) =>{
        setSelectedBreed(newEvent.target.value);
    };

    const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/malamute/n02110063_4432.jpg');
    const randomDogImages = () =>{
        fetch("https://dog.ceo/api/breed/hound/images/random/3")
        .then(response => response.json())
        .then((data) => {
            setDogUrl(data.message)
        })
    }

    return(
        <>
            <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onBreedChange={handleBreedChange}/>
            <button onClick={randomDogImages}>表示</button>
            <DogImage url={dogUrl}/>
        </>
    )
    
}

export default DogListContainer;