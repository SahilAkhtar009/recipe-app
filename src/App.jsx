import React, { useState } from "react";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
import "./App.css";
function App() {
  const [MealData, setMealData] = useState([]);
  const [Area, setArea] = useState("Canadian");
  // const [searchTerm, setSearchTerm] = useState("");

  const GetFood = (elem) => {
    // console.log(elem);
    setArea(elem);
  };

  const SearchFood = (elem) => {
    console.log(elem);
    if (elem != null) {
      setMealData(elem);
    }
  };
  // console.log(searchTerm);

  useEffect(() => {
    const fechingDataApi = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`
      );
      const data = await api.json();
      // console.log(data.meals);
      setMealData(data.meals);
    };
    fechingDataApi();
  }, [Area]);

  return (
    <div className=" bg-black text-white">
      <NavBar GetFood={GetFood} SearchFood={SearchFood} />
      <div className="container mx-auto w-[95vw]  flex justify-center gap-4 flex-wrap p-4">
        {MealData.map((meal, i) => (
          <Cards key={i} meal={meal} />
        ))}
      </div>
    </div>
  );
}

export default App;
