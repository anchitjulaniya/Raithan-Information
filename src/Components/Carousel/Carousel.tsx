import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from '../../assets/Images/Banner/banner1.jpg';
import slider2 from '../../assets/Images/Banner/banner2.jpg';
import slider3 from '../../assets/Images/Banner/bannner3.jpg';
import slider4 from '../../assets/Images/Banner/Banner4.jpg';
import slider5 from '../../assets/Images/Banner/banner5.jpg';

const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const distance = endX - startX;

    if (distance > 50) {
      goToPrevious();
    } else if (distance < -50) {
      goToNext();
    }
  };

  return (
    <div className="relative flex justify-center w-full md:rounded-xl overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%" }}
              animate={{ x: index === currentIndex ? "0%" : "100%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1 }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            />
          ))}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 z-10 md:block hidden"
          onClick={goToPrevious}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 z-10 md:block hidden"
          onClick={goToNext}
        >
          &#10095;
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                currentIndex === index ? "bg-white w-4 h-4" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;