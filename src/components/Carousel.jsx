import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
      {selectedItem ? (
        <div className="expanded-view" onClick={handleClose}>
          <div className="expanded-content">
            <h2>{selectedItem.text}</h2>
            <p>Additional content goes here...</p>
          </div>
        </div>
      ) : (
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
                <div
                  className="cards"
                  style={{ backgroundImage: `url(${item.image})` }}
                  onClick={() => handleClick(item)}
                >
                  <div className="card-text">Click Here</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const items = [
  { text: 'Item 1', image: '/gojo.png' },
  { text: 'Item 2', image: '/kento.png' },
  { text: 'Item 3', image: '/panda.png' },
  { text: 'Item 4', image: '/sakuna.png' },
  { text: 'Item 5', image: '/yuta.png' },
  { text: 'Item 6', image: '/squad.png' },
  // Add more items as needed
];

export default Carousel;
