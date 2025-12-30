import React, { useState } from "react";
import Button from "./Button";

function NavBar({ GetFood, SearchFood }) {
  const moveName = [
    "Indian",
    "Canadian",
    "American",
    "Thai",
    "British",
    "Russian",
  ];
  const [searchTerm, setSearchTerm] = useState("");

  const ChangeHandler = (e) => setSearchTerm(e.target.value);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const api = await fetch(
      `https://themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await api.json();
    SearchFood(data.meals || []);
    setSearchTerm("");
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 p-4 border-b text-white bg-[#1a1a1a]">
      {/* Title */}
      <div className="bg-yellow-500 w-full lg:w-[200px] p-2 rounded-md text-center">
        <h1 className="text-xl font-semibold">FoodyJn</h1>
      </div>

      {/* Search Form */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-md bg-green-700 p-1 rounded-md"
      >
        <input
          onChange={ChangeHandler}
          value={searchTerm}
          type="text"
          aria-label="Search for a meal"
          placeholder="Search for a recipe..."
          className="w-full p-2 font-semibold text-black rounded-md"
        />
      </form>

      {/* Cuisine Buttons */}
      <div className="w-full lg:w-[650px] flex flex-wrap gap-2 justify-center overflow-x-auto">
        {moveName.map((move, index) => (
          <Button key={index} move={move} GetFood={GetFood} />
        ))}
      </div>
    </div>
  );
}

export default NavBar;
