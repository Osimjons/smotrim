import React, { useRef } from 'react';
import styles from './Slider.module.css';

export const Slider = ({ children }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 150;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 150;
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.arrowLeft} onClick={scrollLeft}></button>
      <div className={styles.sliderWrapper}>
        {React.cloneElement(children, { ref: sliderRef })}
      </div>
      <button className={styles.arrowRight} onClick={scrollRight}></button>
    </div>
  );
};
