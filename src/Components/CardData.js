import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Tooltip from "@material-ui/core/Tooltip";

const CardData = ({ question, answer }) => {
  //

  const [showAns, setAns] = useState(false);

  return (
    <>
      <div className="qus">
        <p className="icon" onClick={() => setAns(!showAns)}>
          {showAns ? (
            <Tooltip title="Close">
              <CloseIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Show">
              <AddCircleOutlineIcon />
            </Tooltip>
          )}
        </p>
        <h2>{question}</h2>
      </div>

      <div
        style={{
          padding: "10px",
          color: "#EAFAF1",
          fontStyle: "italic",
          borderRadius: "9px",
          marginTop: "10px",
        }}
      >
        {showAns && <p>{answer}</p>}
      </div>
    </>
  );
};

export default CardData;
