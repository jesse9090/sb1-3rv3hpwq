import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="mb-2">Current count: {count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-primary text-white py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
}
