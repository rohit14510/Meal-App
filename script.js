const recipeBtn = document.getElementById('recipebtn');
const foodList = document.getElementById('food');
const searchBtn = document.getElementById('search');
const foodDetailsContent = document.querySelector('.food-details-content');

searchBtn.addEventListener('click', getfoodList);

function getfoodList(){
    let searchTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTxt}`)
    .then(response => response.json())
    .then(data => {
        let html = "";
        if(data.meals){
            data.meals.forEach(meal => {
                html += `
                    <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            });
            foodList.classList.remove('notFound');
        } else{
            html = "Sorry, we didn't find any meal!";
            foodList.classList.add('notFound');
        }

        foodList.innerHTML = html;
    });
}

