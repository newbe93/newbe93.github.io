import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AlPhabet from './components/Alphabet';

const App = () => {
  return (
    <>
        <AlPhabet/>
        <div>
          <h1>Additional Content</h1>
        </div>
    </>
  );
};

export default App;