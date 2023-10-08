// index.tsx
import React from 'react';
import Navbar from '../components/navbar'; // Import the Navbar component
import HomePage from '../components/homePage';


// App component
function App() {
  return (
    <div>
      <Navbar />
      <HomePage/>
    </div>
  );
}
export default App;