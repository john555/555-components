import React, { useState, useRef } from 'react';
import InfiniteScrollList from 'components/InfiniteScrollList';

const InfiniteScrollListExample = () => {
  const [items, setItems] = useState([{ id: 1 }, { id: 2 }, { id: 3 }]);
  const timer = useRef(null);

  const mockFetch = () => {
    if (timer.current) {
      return;
    }

    timer.current = setTimeout(() => {
      setItems([
        ...items,
        { id: items.length + 1 },
        { id: items.length + 2 },
        { id: items.length + 3 },
      ]);
      timer.current = null;
    }, 900);
  };

  return (
    <InfiniteScrollList
      callback={mockFetch}
      items={items}
      Child={props => (
        <div style={{ height: 90 }}>
          Scroll
          {Array(props.id)
            .fill('👇')
            .join('')}
        </div>
      )}
    />
  );
};

export default InfiniteScrollListExample;
