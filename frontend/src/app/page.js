"use client";
import { useState } from "react";

const featuredMoments = [
  {
    title: "Overlanding Trips",
    description:
      "Overlanding is a form of slow travel. It's all about taking the road less travelled, camping across different terrains, and getting away from the tourist trail in overlanding trucks.",
    image: "/pics/Screenshot 2025-06-24 004251.png",
  },
  {
    title: "Mountain & Desert Camping",
    description:
      "We've found the perfect mountains and deserts to pitch your tent and roll out those sleeping bags for a date with the milky way. Want in?",
    image: "/pics/Screenshot 2025-06-24 004313.png",
  },
  {
    title: "Mountain Trekking",
    description:
      "Far away from the skyscrapers and beach clubs of Dubai, we've discovered a breathtaking array of mountains, deserts and lush green wadis waiting to be explored. So, let's go hiking!",
    image: "/pics/Screenshot 2025-06-24 004346.png",
  },
];

export default function Home() {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;
  const total = featuredMoments.length;

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + total) % total);
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % total);
  };

  // Get visible cards, wrap around if needed
  const visibleCards = Array.from({ length: visibleCount }, (_, i) =>
    featuredMoments[(startIdx + i) % total]
  );

  return (
    <section className="featured-section">
      <div className="featured-section-arrows">
        <button className="arrow-btn-new" onClick={handlePrev} aria-label="Previous">
          &#8592;
        </button>
        <button className="arrow-btn-new" onClick={handleNext} aria-label="Next">
          &#8594;
        </button>
      </div>
      <div className="featured-section-container">
        <h2 className="featured-section-title">Featured Moments</h2>
        <p className="featured-section-subtitle">
          Our experiences reflect our distinct ethos and core values, highlighting the very best each of our homes offers.
        </p>
        <div className="featured-section-grid">
          {visibleCards.map((moment, idx) => (
            <div className="featured-card-new" key={idx}>
              <img
                src={moment.image}
                alt={moment.title}
                className="featured-card-image"
                draggable="false"
              />
              <h3 className="featured-card-title">{moment.title}</h3>
              <p className="featured-card-desc">{moment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
