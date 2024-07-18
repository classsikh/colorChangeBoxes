import React from "react";
import Box from "./componets/box";
import './componets/box.css'
function App() {
  return(
    <div className="c-div">
      <h1> Assignment I</h1>
      <Box/>
      <p>click on the boxes to change color & when you click the last remaining box it will change back the color in same order we clicked the boxes </p>
    </div>
  ) ;
}

export default App;
