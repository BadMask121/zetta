import React, { useState } from "react";
import "./style.scss";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

interface ICarouselProps {
  images: Array<string>;
  className?: string;
  nextIcon?: JSX.Element;
  previousIcon?: JSX.Element;
}

// [HELPERS]

const SWIPE_CONFIDENCE_THRESHOLD = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const Carousel = ({ images, className }: ICarouselProps) => {
  const [[page, direction], setPage] = useState([0, 0]);

  // move page indexes
  const paginate = (newDirection: number) =>
    setPage([page + newDirection, newDirection]);

  // current initial image index
  const imageIndex = wrap(0, images.length, page);

  // move indexes on swap gesture
  const onDrag = (
    _e: any,
    { offset, velocity }: { offset: any; velocity: any }
  ) => {
    const swipe = swipePower(offset.x, velocity.x);
    if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
      paginate(1);
    } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
      paginate(-1);
    }
  };

  return (
    <div className={`CarouselContainer ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {
              type: "spring",
              stiffness: 600,
              damping: 100,
              clamp: true,
              mass: 10,
              tension: 550,
              friction: 50,
            },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={onDrag}
        />
      </AnimatePresence>
      {/* <div
        className="CarouselContainer__button CarouselContainer__button--prev"
        onClick={() => paginate(1)}
      >
        {previousIcon || <Previous />}
      </div>
      <div
        className="CarouselContainer__button CarouselContainer__button--next"
        onClick={() => paginate(-1)}
      >
        {nextIcon || <Next />}
      </div> */}
    </div>
  );
};

export default React.memo(Carousel);
