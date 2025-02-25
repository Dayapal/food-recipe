import React from "react";
import RecipeCard from "./components/RecipeCard";
import './App.css';
import Navbar from "./components/Navbar";



const App = () => {
  const recipe = {
    name: "Spaghetti Carbonara",
    image: "https://www.foodiesfeed.com/wp-content/uploads/2023/04/strawberry-milk-splash.jpg",
    ingredients: ["200g Spaghetti", "100g Bacon", "2 Eggs", "50g Parmesan Cheese", "Salt", "Pepper"],
    instructions: "Boil pasta. Cook bacon. Mix eggs and cheese. Combine everything and serve hot."
  };

  return (
    <div>
      <Navbar/>
      <h1 className="heading" >Food Recipe-Web-site</h1>
      <RecipeCard recipe={recipe} />
      <RecipeCard recipe={recipe} />
    </div>
  );
};

export default App;
