import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./box.css";

function Box() {
  const matrix = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ];

  const boxes = matrix.flatMap((row, rowIndex) =>
    row.map((box, columnIndex) => ({ rowIndex, columnIndex }))
  );
  
  
  const [clicked, setClicked] = useState(new Set());
  const [changing, setChanging] = useState(false);
  const handleClick = (index) => {
    
    if(changing){
      return;
    }
    setClicked((prev) => {
   
    
      return new Set(prev.add(index));
    });
  };

  const changeColor = () => {
    setChanging(true);
    const keys = Array.from(clicked.keys());
    const removeNextKey = () => {
      if (keys.length) {
        const currentKey = keys.shift();
        setClicked((prev) => {
          const updatedKeys = new Set(prev);
          updatedKeys.delete(currentKey);
          return updatedKeys;
        });
        
        
        setTimeout(removeNextKey, 500);
      }else{
        setChanging(false);
      }
    };
    setTimeout(removeNextKey, 100);
  };

  useEffect(() => {
    if (clicked.size >= 9) {
      changeColor();
      
    }
    else{

    }
  }, [clicked]);

  return (
    <div className="box-container">
      {boxes.map((box, index) => {
        const key = `${box.rowIndex}-${box.columnIndex}`;
        const isClicked = clicked.has(key);
        return (
          <div
            key={key}
            className={classnames("box", isClicked ? "green" :"orange")}
            index={key}
            onClick={() => handleClick(key)}
          />
        );
      })}
    </div>
  );
}

export default Box;