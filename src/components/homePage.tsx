import React from 'react';
import breadImage from '../images/breads.jpeg'; // Adjust the path as needed
import pastryImage from '../images/pastries.jpg'; // Adjust the path as needed
import cakeImage from '../images/cakes.jpg'; // Adjust the path as needed
import dessertsImage from '../images/desserts.jpg'; // Adjust the path as needed
import styles from '../styles/homePage.module.css'; // Import your CSS module

const HomePage = () => {
  // Define a function to handle the button click event
  const handleBreadClick = () => {
    console.log('Button clicked');
  };

  const handleCakeClick = () => {
    console.log('Button clicked');
  };

  const handleDessertClick = () => {
    console.log('Button clicked');
  };

  return (
    <div>
      <div className={styles['button-container']}>
        {/* Create circular buttons with background images */}
        <button
          className={styles['circle-button']}
          onClick={handleBreadClick}
          style={{ backgroundImage: `url(${breadImage.src})` }}
        />
        <button
          className={styles['circle-button']}
          onClick={handleDessertClick}
          style={{ backgroundImage: `url(${pastryImage.src})` }}
        />
        <button
          className={styles['circle-button']}
          onClick={handleCakeClick}
          style={{ backgroundImage: `url(${cakeImage.src})` }}
        />
        <button
          className={styles['circle-button']}
          onClick={handleDessertClick}
          style={{ backgroundImage: `url(${dessertsImage.src})` }}
        />

      </div>
    </div>
  );
};

export default HomePage;
