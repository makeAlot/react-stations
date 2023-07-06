// DO NOT DELETE
import React from "react";
import { useState } from "react";
import DogImage from "./DogImage";

export const Description = () => {
    const [dogUrl,setDogUrl] = useState('https://images.dog.ceo/breeds/malamute/n02110063_4432.jpg');

    const randomDogImage = () =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then((data) => {
            setDogUrl(data.message)
        })
    }
    return(
        <div>
            <p>犬の画像を表示するサイトです。</p>
            <button onClick={randomDogImage} className='button'>更新する</button>
            <DogImage url={dogUrl}/>
        </div>
    )
}

export default Description;