import React, { useState, useEffect, useRef } from 'react';
import { ReactPhotoSphereViewer, MarkersPlugin } from 'react-photo-sphere-viewer';
import './styles.css'; // Import your CSS file

import Classroom from './Classroom.jpg';
import GJB_Library from './GJB Library.jpg';
import GJBC from './GJBC.jpg';
import MRD from './MRD.jpg';
import OAT from './OAT.jpg';
import Panini from './Panini.jpg';
import PR_Square from './PR Square.jpg';

const images = [Classroom, GJB_Library, GJBC, MRD, OAT, Panini, PR_Square];

const correctAnswers = {
  [Classroom]: 'classroom',
  [GJB_Library]: 'gjb library',
  [GJBC]: 'gjb canteen',
  [OAT]: 'oat',
  [MRD]: 'mrd',
  [Panini]: 'bharghavs',
  [PR_Square]: 'pr cube',
  // Add correct answers for more images
};

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const GeoGuessrGame = () => {
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
        // End of the game logic, you can display a game over message or reset the game
        alert(`Game Over! Your Final Score: ${score}`);
        setRound(1);
        setScore(0);
      }, 200);
    }
  }, [round, score]);
  
    

  return (
    <div className="game-container"> {/* Add a class to the container */}
      <ReactPhotoSphereViewer
        key={viewerKey} // Use key to force remount
        ref={photoSphereRef}
        src={currentImage}
        littlePlanet={true}
        height={'90vh'}
        width={'100%'}
        plugins={[
          [MarkersPlugin, {
            markers: [{
              id: 'marker1',
              ...markerPosition,
              image: 'https://i.imgur.com/3X9ZvZv.png',
              width: 32,
              height: 32,
              tooltip: 'Click me!',
              handleClick: () => alert('You clicked the marker!'),
            }],
          }],
        ]}
      />

      <div className="game-controls">
        <input
          type="text"
          value={playerGuess}
          onChange={(e) => setPlayerGuess(e.target.value)}
          placeholder="Enter your guess"
          className='textbox'
        />
        <button onClick={handleGuess} className='button'>Guess</button>
    </div>


    <div className='score'> 
            Round: {round}/5 <br></br>
              Score: {score}</div>
      </div>
  );
};

export default GeoGuessrGame;




