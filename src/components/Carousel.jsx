
import { animated, useSpring } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

const items = [
  { text: 'ProGo Cli', image: '/stock1.png' },
  { text: 'Item 2', image: '/stock2.png' },
  { text: 'Item 3', image: '/stock3.png' },
  { text: 'Item 4', image: '/stock4.png' },
  { text: 'Item 5', image: '/stock5.png' },
  { text: 'Item 6', image: '/stock2.png' },
];

const Carousel = () => {
  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  const bind = useDrag((state) => {
    api.start({
      x: state.offset[0],
      config: {
        tension: 369,
        friction: 60,
      },
    });
  });

  return (
    <div className="carousel-wrapper">
      <animated.div
        {...bind()}
        className="carousel-container"
        style={{ transform: x.to((x) => `translateX(${x}px)`) }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <img src={item.image} alt={item.text} />
          </div>
        ))}
      </animated.div>
    </div>
  );
};

export default Carousel;
