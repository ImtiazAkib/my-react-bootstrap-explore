import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup, Button, Row, Col, Card, Spinner } from "react-bootstrap";
import Mealdb from "./components/Mealdb/Mealdb";
import Meal from "./components/Meal/Meal";
import { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="App">
      {meals.length === 0 ? (
        <Spinner animation="grow" className="mt-5" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {meals.map((meal) => (
            <Meal
              key={meal.idMeal}
              name={meal.strMeal}
              img={meal.strMealThumb}
              description={meal.strInstructions}
            ></Meal>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
