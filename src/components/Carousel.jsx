import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Carousel.css'; // Import your CSS file for styling

const Carousel = () => {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (item) => {
    if (!isDragging) {
      setSelectedItem(item);
    }
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="carousel-container">
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key="expanded"
            className="expanded-view"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            layoutId={selectedItem.text}
            style={{ backgroundImage: `url(${selectedItem.image})` }}
          >
            <div className="expanded-content">
              <h2>{selectedItem.text}</h2>
              <p>Additional content goes here...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {items.map((item, index) => (
            <motion.div className="item" key={index}>
              <motion.div
                className="cards"
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => handleClick(item)}
                layoutId={item.text}
              >
                <motion.div
                  className="card-text"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Click Here
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const items = [
  { text: 'ProGo Cli', image: '/gojo.png' },
  { text: 'Item 2', image: '/kento.png' },
  { text: 'Item 3', image: '/panda.png' },
  { text: 'Item 4', image: '/sakuna.png' },
  { text: 'Item 5', image: '/yuta.png' },
  { text: 'Item 6', image: '/squad.png' },
  // Add more items as needed
];

export default Carousel;
