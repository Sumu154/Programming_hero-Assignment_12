import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import countDown from './assets/Animations/countDown.json'; // Your Lottie animation file

function App() {
  const [count, setCount] = useState(500); // Set initial value to 500

  // You can later fetch and update this value from your database/API
  useEffect(() => {
    // Example of how you might fetch a number dynamically (simulated here)
    // For now, this is just an example and will use `500` directly.
    const fetchCount = async () => {
      // Replace with your real API request logic to fetch the count.
      const newCount = 500;  // Simulated count fetching
      setCount(newCount);
    };

    fetchCount();
  }, []); // Empty dependency array, runs once when the component mounts.

  return (
    <div className="App">
      <h1>Total Count</h1>
      
      {/* Lottie Animation */}
      <Lottie
        animationData={countDown}
        loop={true}
        autoplay={true}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice"
        }}
      />

      {/* Display Dynamic Count */}
      <div className="count">
        <span>{count}</span> {/* This is where the dynamic count is displayed */}
      </div>
    </div>
  );
}

export default App;
