import React from "react";

const Instructions = ({ step, no_ }) => {
  return (
    <div className="flex justify-start items-center">
      {/* <div>{no_} </div> */}
      <div className="font-poppins">{step}</div>
    </div>
  );
};

export default Instructions;
