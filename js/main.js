const getMealInput = () => {
    const mealInput = document.getElementById("input-text").value;
    const ingredients = document.getElementById("meal-list");
  
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          
        const foodsDiv = document.getElementById("meal-list");
        let foodsInput = data.meals;
        let foodList = "";
        foodsInput.forEach((element) => {

            foodList += ` 


            <div onClick="getMealItem('${element.strMeal}')" class="food">
              <img class="card-img-top" src="${element.strMealThumb}" />
              <div class="card-body">
                <h5 class="card-title text-center">${element.strMeal}</h5>
              </div>
            </div>
            `;


        });
        foodsDiv.innerHTML = foodList;
      })
      .catch(function () {
        const foodError = document.getElementById("meal-list");
        let foodErrorString = "";
        foodErrorString = `<h2 class="meal-error">Sorry!We don't find any meal..</h2>`;
        foodError.innerHTML = foodErrorString;
      });
  
  };


  
  const getMealItem = (mealsIngredients) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealsIngredients}`;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const meal = data.meals;
        ingredientsFood(meal[0]);
      });
  };
  
  




  const ingredientsFood = (mealsIngredients) => {
    const MealDetailsDiv = document.getElementById("meal-list");
    MealDetailsDiv.style.display = "block";
    MealDetailsDiv.innerHTML = `
    <div class="meal-list">
       <img src="${mealsIngredients.strMealThumb}"/>
          <h3>${mealsIngredients.strMeal}</h3>
          <ul >
            <li>${mealsIngredients.strIngredient1}</li>
            <li>${mealsIngredients.strIngredient2}</li>
            <li>${mealsIngredients.strIngredient3}</li>
            <li>${mealsIngredients.strIngredient4}</li>
            <li>${mealsIngredients.strIngredient5}</li>
            <li>${mealsIngredients.strIngredient6}</li>
            <li>${mealsIngredients.strIngredient7}</li>
            <li>${mealsIngredients.strIngredient8}</li>
          </ul>
         
          <h4>Instructions details</h4>
          <p>${mealsIngredients.strInstructions}</p>
    </div>
    
    `;
  };