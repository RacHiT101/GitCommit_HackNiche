import React from "react";

const Instructions = ({ step, no_ }) => {
  return (
    <div className="flex justify-start items-center">
      <div>{no_}</div>
      <div>{step}</div>
    </div>
  );
};

export default Instructions;
