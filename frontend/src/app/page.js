"use client";
import { useState } from "react";

const featuredMoments = [
  {
    title: "Overlanding Trips",
    description:
      "Overlanding is a form of slow travel. It's all about taking the <br /> road less travelled,camping across different terrains, and <br /> getting away from the tourist trail in overlanding trucks.",
    image: "/pics/Screenshot 2025-06-24 004251.png",
    splitWord: "the",
    splitWord2: "and",
  },
  {
    title: "Mountain & Desert Camping",
    description:
      "We've found the perfect mountains and deserts to pitch your <br />tent and roll out those sleeping bags for a date with the milky <br />way. Want in?",
    image: "/pics/Screenshot 2025-06-24 004313.png",
  },
  {
    title: "Mountain Trekking",
    description:
      "Far away from the skyscrapers and beach clubs of Dubai,<br />we've discovered a breathtaking array of mountains, deserts<br /> and lush green wadis waiting to be explored. So, let's go<br /> hiking!",
    image: "/pics/Screenshot 2025-06-24 004346.png",
  },
  {
    title: "Farm Adventure",
    description:
      "If you love animals and the outdoors, this is the perfect getaway. Experience farm life and meet our friendly horses!",
    image: "/pics/horse-farm.jpg",
  },
  {
    title: "City Lights",
    description:
      "Explore the vibrant nightlife and stunning cityscapes.<br />Discover the city after dark.",
    image: "/pics/placeholder-city-lights.png",
  },
  {
    title: "Beach Retreat",
    description:
      "Relax on pristine beaches and soak up the sun.<br />Perfect for a peaceful getaway.",
    image: "/pics/placeholder-beach-retreat.png",
  },
  {
    title: "Forest Adventure",
    description:
      "Wander through lush forests and reconnect with nature.<br />A true escape from the city.",
    image: "/pics/placeholder-forest-adventure.png",
  },
  {
    title: "Cultural Journey",
    description:
      "Immerse yourself in local traditions and history.<br />A journey for the curious mind.",
    image: "/pics/placeholder-cultural-journey.png",
  },
  
];

export default function Home() {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;
  const total = featuredMoments.length;
  const cardWidth = 450; // px
  const gap = 45; // px
  const peek = 0.3; // fraction of the 4th card to show

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + total) % total);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % total);
  };

  // Calculate translateX for the slider
  const translateX = -(startIdx * (cardWidth + gap));

  return (
    <section className="featured-section">
      <div className="featured-section-arrows">
        <button className="arrow-btn-new arrow-btn-left" onClick={handlePrev} aria-label="Previous">
          &#8592;
        </button>
        <button className="arrow-btn-new" onClick={handleNext} aria-label="Next">
          &#8594;
        </button>
      </div>
      <div className="featured-section-container">
        <h2 className="featured-section-title">Featured Moments</h2>
        <p className="featured-section-subtitle">
          Our experiences reflect our distinct ethos and core values, highlighting<br /> the very best each of our homes offers.
        </p>
        <div
          className="carousel-viewport"
          style={{
            width: `${cardWidth * visibleCount + gap * (visibleCount - 1) + cardWidth * peek}px`,
            overflow: 'hidden',
          }}
        >
          <div
            className="carousel-row"
            style={{
              display: 'flex',
              gap: `${gap}px`,
              transition: 'transform 0.5s cubic-bezier(0.4,0,0.2,1)',
              transform: `translateX(${translateX}px)`,
            }}
          >
            {featuredMoments.map((moment, idx) => (
              <div className="featured-card-new" key={idx} style={{ minWidth: `${cardWidth}px`, maxWidth: `${cardWidth}px` }}>
                <img
                  src={moment.image}
                  alt={moment.title}
                  className="featured-card-image"
                  draggable="false"
                />
                <h3 className="featured-card-title">{moment.title}</h3>
                <p className="featured-card-desc" dangerouslySetInnerHTML={{ __html: moment.description }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
