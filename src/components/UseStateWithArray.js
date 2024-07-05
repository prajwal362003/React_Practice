import React, { useState } from "react";

const UseStateWithArray = () => {
  const [items, setItems] = useState([]);

  console.log(items);

  const addItems = () => {
    setItems([
      ...items, //  so that the past values do not get overrided
      {
        id: items.length,
        value: Math.random(),
      },
    ]);
  };
  return (
    <>
      <ol>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ol>

      <button onClick={addItems}>Add Items</button>
    </>
  );
};

export default UseStateWithArray;
