"use client";
import { useState } from "react";

export default function ClientComponent({ content }) {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 3;
  const total = content.cards.length;
  const cardWidth = 450;
  const gap = 45;
  const peek = 0.3;

  const handlePrev = () => setStartIdx((prev) => (prev - 1 + total) % total);
  const handleNext = () => setStartIdx((prev) => (prev + 1) % total);
  const translateX = -(startIdx * (cardWidth + gap));

  return (
    <section className="featured-section" role="region" aria-label="Featured travel experiences carousel">
      <div className="featured-section-arrows">
        <button className="arrow-btn-new arrow-btn-left" onClick={handlePrev}>
          &#8592;
        </button>
        <button className="arrow-btn-new" onClick={handleNext}>
          &#8594;
        </button>
      </div>
      <div className="featured-section-container" id="main-content">
        <h2 className="featured-section-title">{content.heading}</h2>
        <p
          className="featured-section-subtitle"
          dangerouslySetInnerHTML={{
            __html: content.subheading.replace(/\n/g, "<br />"),
          }}
        />
        <div
          className="carousel-viewport"
          style={{
            width: `${cardWidth * visibleCount + gap * (visibleCount - 1) + cardWidth * peek}px`,
            overflow: "hidden",
          }}
        >
          <div
            className="carousel-row"
            style={{
              display: "flex",
              gap: `${gap}px`,
              transition: "transform 0.5s",
              transform: `translateX(${translateX}px)`,
            }}
          >
            {content.cards.map((card, idx) => (
              <div
                className="featured-card-new"
                key={idx}
                style={{
                  minWidth: `${cardWidth}px`,
                  maxWidth: `${cardWidth}px`,
                }}
              >
                <img
                  src={card.image.asset.url}
                  alt={card.title}
                  className="featured-card-image"
                  draggable="false"
                />
                <h3 className="featured-card-title">{card.title}</h3>
                <p
                  className="featured-card-desc"
                  dangerouslySetInnerHTML={{
                    __html: card.description.replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
