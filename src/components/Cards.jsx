import React from "react";

function Cards({ meal }) {
  return (
    <div className="relative w-[220px] h-[300px] rounded-md  border-2 text-center overflow-hidden text-center">
      <div className="card bg-green-400  h-[280px]">
        <img src={meal.strMealThumb} alt="" className="w-full h-full" />
      </div>
      <h5 className=" absolute p-2 font-semibold bg-yellow-400 w-full bottom-1 ">
        {meal.strMeal}
      </h5>
    </div>
  );
}

export default Cards;
