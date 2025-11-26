// components/HeroBanner.jsx
import React from "react";
import styles from "../styles/herobanner/module.module.css";

import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className={styles.heroContainer}>
      {/* Next.js Image Component */}
      <Image
        src="/herobanner.avif" // Directly in public folder
        alt="Agriculture and Eco Farming Banner"
        fill // makes the image cover the container
        style={{ objectFit: "cover" }} // full-cover
        priority
      />

      {/* Overlay to make text readable */}
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.subHeading}>WHAT MAKES US SPECIAL?</p>
        <h1 className={styles.mainHeading}>
          Agriculture & Eco <br />
          Farming
        </h1>
        <button className={styles.discoverButton}>Discover More &rarr;</button>
      </div>
    </div>
  );
};

export default HeroBanner;
