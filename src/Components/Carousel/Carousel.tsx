import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import slider1 from '../../assets/Images/Banner/banner1.jpg'
import slider2 from '../../assets/Images/Banner/banner2.jpg'
import slider3 from '../../assets/Images/Banner/bannner3.jpg'
import slider4 from '../../assets/Images/Banner/Banner4.jpg'
import slider5 from '../../assets/Images/Banner/banner5.jpg'


const images = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center w-full rounded-xl overflow-hidden">
    {/* Carousel Container */}
    <div className="relative w-[75%] md:w-full h-[400px] overflow-hidden">
      <AnimatePresence custom={currentIndex}>
        {images.map((image, index) => (
          index === currentIndex && (
            <motion.img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="absolute w-full h-full object-cover"
              initial={{ x: "100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1 }}
            />
          )
        ))}
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-4 h-4" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);
};

export default Carousel;