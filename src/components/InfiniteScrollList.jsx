import React, { useRef, useEffect } from 'react';
import PropTypes from 'proptypes';

import './InfiniteScrollList.scss';

const InfiniteScrollList = ({ callback, items, Child, gap }) => {
  const loaderRef = useRef();
  const observerRef = useRef();

  useEffect(() => {
    const handleIntersection = ([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    };

    const loader = loaderRef.current;

    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(handleIntersection, {
        threshold: 1,
      });

      observerRef.current.observe(loader);
    }

    return () => {
      observerRef.current.unobserve(loader);
    };
  }, [callback]);

  return (
    <ul className="infinite-scroll-list">
      {items.map(item => (
        <li key={item.id}>
          <Child {...item} />
        </li>
      ))}
      <li className="infinite-scroll-list__item" ref={loaderRef}>
        Loading...
      </li>
    </ul>
  );
};

InfiniteScrollList.propTypes = {
  /** Function to be called when we scroll to the end of the list */
  callback: PropTypes.func.isRequired,
};

export default InfiniteScrollList;
