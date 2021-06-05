import { useRef, useEffect, useCallback } from "react";

const useScrollFadeIn = (direction = "down", duration = 1, delay = 0.5) => {
  const dom = useRef();
  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]) => {
      const { current } = dom;
      if (entry.isIntersecting) {
        current.style.transitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = "translate3d(0, 0, 0)";
        current.style.transitionTimingFunction = "ease-in-out";
        current.style.width = "100%";
      }
    },
    [delay, duration]
  );

  useEffect(() => {
    let options = {
      threshold: 1.0,
    };

    let observer;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, options);
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;
