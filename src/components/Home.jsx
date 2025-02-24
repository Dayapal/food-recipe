import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";


const API_URL =
  "https://api.spoonacular.com/recipes/complexSearch?apiKey=423b75a73fc844d681880d9848568cc1&number=10&addRecipeInformation=true";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setRecipes(data.results);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-list">
      <h1>Recipes</h1>
      <input type="text" placeholder="Search your favorit food" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="recipes">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
