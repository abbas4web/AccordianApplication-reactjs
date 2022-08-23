import React, { useState } from "react";
import quesions from "./Api";
import CardData from "./CardData";
import "./Card.css";

const Card = () => {
  //

  const [setData, setNewData] = useState(quesions);

  return (
    <>
      <div className="main__Div">
        <h1> React.Js Interviw Questions </h1>
        <div className="scroll">
          {setData.map((curElem, key) => {
            return (
              <div className="div" key={key}>
                <CardData {...curElem} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
