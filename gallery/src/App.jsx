
import { useState } from 'react';


import DestinationGallery from './components/DestinationGallery';
import destinations from './data/destinations';

import './App.css';

function App() {
  const [selectedDestination, setSelectedDestination] =
    useState(null);

  return (
    <main>
      <DestinationGallery
        destinations={destinations}
        onSelect={setSelectedDestination}
      />

      {selectedDestination && (
        <div className="lightbox">
          <button
            className="lightbox-close"
            onClick={() => setSelectedDestination(null)}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          <img
            src={selectedDestination.image}
            alt={selectedDestination.name}
          />

          <div className="lightbox-info">
            <h2>{selectedDestination.name}</h2>
            <p>{selectedDestination.country}</p>
            <p>{selectedDestination.description}</p>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
