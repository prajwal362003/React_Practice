import React, { useState } from "react";

const ToDoList = () => {
  const [activity, setActivity] = useState("");

  const [listData, setListData] = useState([]);
  const addActivity = () => {
    // setListData({ ...listData, activity });
    // console.log(listData);

    setListData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  };

  const removeActivity = (i) => {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });

    setListData(updatedListData);
  };

  const removeAllActivities = () => {
    setListData([]);
  };
  return (
    <>
      <div className="container4">
        <div className="header">To Do List</div>
        <input
          type="text"
          placeholder="Add Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>

        <p className="list-heading">Here is your List</p>
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-posn">
                    <button onClick={() => removeActivity(i)}>Remove</button>
                  </div>
                </p>
              </>
            );
          })}

        {listData.length >= 1 && (
          <button onClick={removeAllActivities}>Remove All</button>
        )}
      </div>
    </>
  );
};

export default ToDoList;
