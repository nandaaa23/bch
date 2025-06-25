"use client";
import { useState } from "react";

const featuredMoments = [
  {
    title: "Overlanding Trips",
    description:
      "Overlanding is a form of slow travel. It's all about taking the <br /> road less travelled,camping across different terrains, and <br /> getting away from the tourist trail in overlanding trucks.",
    image: "/pics/Screenshot 2025-06-24 004251.png",
    splitWord: "the",
splitWord2:"and",
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
              <p className="featured-card-desc" dangerouslySetInnerHTML={{ __html: moment.description }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
