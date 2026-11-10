function DestinationGallery({ destinations, onSelect })
{
    return(
        <section className="gallery-section" id="destinations">
     <div className="gallery-heading">
        <div>
          <p className="section-label">EXPLORE THE WORLD</p>
          <h2>Red's travel bucket list.</h2>
        </div>

        <p className="gallery-subtitle">
          The world is waiting for you!
        </p>
      </div>

      <div className="masonry-grid">

        {destinations.map((destination) => (
          <button
            className="destination-card"
            key={destination.id}
            onClick={() => onSelect(destination)}
            aria-label={`View ${destination.name}, ${destination.country}`}
          >
            <img
              src={destination.image}
              alt={`${destination.name}, ${destination.country}`}
            />

            <div className="destination-overlay">
              <div>
                <h3>{destination.name}</h3>
                <p>{destination.country}</p>
              </div>

              <span className="destination-arrow">↗</span>
            </div>

          </button>
        ))}

      </div>
        </section>
    )
}

export default DestinationGallery;