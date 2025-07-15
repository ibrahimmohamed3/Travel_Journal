import React from "react";
import mountFujiImg from "../assets/mount-fuji.jpg"; // Ensure this image exists

function Entry() {
  return (
    <section className="entry">
      <img src={mountFujiImg} alt="Mount Fuji" className="entry-img" />
      <div className="entry-info">
        <span className="entry-location">JAPAN</span>
        <a
          href="https://www.google.com/maps?q=mount+fuji"
          className="entry-maps"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Google Maps
        </a>
        <h2 className="entry-title">Mount Fuji</h2>
        <p className="entry-date">12 Jan, 2021 - 24 Jan, 2021</p>
        <p className="entry-desc">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters. 
          Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </section>
  );
}

export default Entry;