import React, { useState, useEffect, useRef } from 'react';
import { ReactPhotoSphereViewer, MarkersPlugin } from 'react-photo-sphere-viewer';
import {useNavigate} from 'react-router-dom'

import './gameplay.css'; // Import your CSS file

import Classroom from '/src/Classroom.jpg';
import GJB_Library from '/src/GJB Library.jpg';
import GJBC from '/src/GJBC.jpg';
import MRD from '/src/MRD.jpg';
import OAT from '/src/OAT.jpg';
import Panini from '/src/Panini.jpg';
import PR_Square from '/src/PR_Square.jpg';
import GYM from '/src/GYM.jpg'; 


export default function Gameplay() {
    const navigate = useNavigate()  

    const images = [Classroom, GJB_Library, GJBC, MRD, OAT, Panini, PR_Square];
    const correctAnswers = {
        [Classroom]: 'classroom',
        [GJB_Library]: 'gjb library',
        [GJBC]: 'gjb canteen',
        [OAT]: 'oat',
        [MRD]: 'mrd',
        [Panini]: 'f block',
        [GYM]: 'gym',
        [PR_Square]: 'pr cube',
        // Add correct answers for more images
    };

    const getRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };

        const [currentImage, setCurrentImage] = useState(getRandomImage());
        const [playerGuess, setPlayerGuess] = useState('');
        const [score, setScore] = useState(0);
        const [round, setRound] = useState(1);
        const [viewerKey, setViewerKey] = useState(0); // Add key state
        const photoSphereRef = useRef();

        useEffect(() => {
            // Start a new round when the round changes
            setCurrentImage(getRandomImage());
            setPlayerGuess('');
            setViewerKey((prevKey) => prevKey + 1); // Increment key to force remount
        }, [round]);

        const markerPosition = { // Add a default marker position
            yaw: 0,
            pitch: 0,
        };

        const handleGuess = () => {
            if (playerGuess.trim() !== '') {
            const isCorrect =
                playerGuess.trim().toLowerCase() ===
                correctAnswers[currentImage].toLowerCase();
            const roundScore = isCorrect ? 10 : 0;
            //display wrong answer
            if (!isCorrect) {
                alert('Wrong Answer!');
            }
        
            setScore(score + roundScore);
        
            // Move to the next round or end the game after 5 rounds
            if (round <= 5) {
                setRound(round + 1);
            }
            }
        };
    
        useEffect(() => {
            // Check if it's the final round and trigger game-over logic
            if (round === 6) {
                setTimeout(() => {
                alert(`Game Over! Your Final Score: ${score}`);
                navigate('/') //change to scoreboard
                setRound(1);
                setScore(0);
            }, 100);
            }
        }, [round, score]);
        
        

        return (
            <div className="game-container">
            <ReactPhotoSphereViewer
                key={viewerKey} // Use key to force remount
                ref={photoSphereRef}
                src={currentImage}
                littlePlanet={true}
                height={'90vh'}
                width={'90%'}
            />

            <div className="game-controls">
                <input
                type="text"
                value={playerGuess}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    handleGuess();
                    }
                }}
                
                onChange={(e) => setPlayerGuess(e.target.value)}
                placeholder="Enter your guess"
                className='textbox'
                />
                <button onClick={handleGuess} onKeyDown={handleGuess} className='button'>Guess</button>
            </div>

            <div className='score'> 
                    Round: {round}/5 <br></br>
                    Score: {score}</div>
            </div>
        );
    
};





