

//list item area----------------------------------------

const searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", () =>{
    const inputName = document.getElementById('place').value;

    getItemName(inputName);

    // console.log(inputName);

})


    function getItemName(name){

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

        fetch(url)

        .then(response => response.json())
        .then(data => displayFood(data.meals));


    }

    function displayFood(foods){
        

        const foodDiv = document.getElementById("show-item")

        foods.forEach(food => {

            const div = document.createElement("div");

            div.className = 'div-style'
            foodDiv.className = 'foodDiv-style'


            const foodInfo =`

            <img onclick ="getItemDetails('${food.strMeal}')" src ="${food.strMealThumb}">

            <h3>${food.strMeal}</h3>

           `
            div.innerHTML = foodInfo;

foodDiv.appendChild(div);




            
        });



        

    }

//             //details area-------------------------------------------------





function getItemDetails(name){

    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`;

    fetch(url)

    .then(response => response.json())
    .then(data => console.log(data.name));


}