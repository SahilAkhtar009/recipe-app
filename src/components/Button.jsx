import React from "react";

function Button({ move, GetFood }) {
  return (
    <button
      className="px-4 py-2 border-2 border-black-400 rounded-md font-semibold hover:bg-orange-500"
      onClick={() => {
        GetFood(move);
      }}
    >
      {move}
    </button>
  );
}

export default Button;
