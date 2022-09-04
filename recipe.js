import { navbar } from './navbar.js'

const navbarDiv = document.getElementById('navBar')
navbarDiv.innerHTML = navbar()

async function recipedata() {
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`
    const res = await fetch(url)
    const recipe = await res.json()
    console.log(recipe)
    localStorage.setItem('RecipeOftheDay', JSON.stringify(recipe))
  } catch (error) {
    console.log(error, 'err')
  }
}
recipedata()

function ShowRecipeData() {
  const Recipe = JSON.parse(localStorage.getItem('RecipeOftheDay'))
  Recipe.meals.map((el) => {
    let main_div = document.createElement('div')
    main_div.id = 'mainDiv'
    main_div.style.display = 'flex'
    let div1 = document.createElement('div')
    div1.id = 'div1'
    let image = document.createElement('img')
    image.id = 'food_image'
    image.src = el.strMealThumb
    let name = document.createElement('h4')
    name.innerText = 'Name : ' + el.strMeal
    let Area = document.createElement('h4')
    Area.innerText = 'Type : ' + el.strArea
    let category = document.createElement('h4')
    category.innerText = 'Category : ' + el.strCategory

    let ingredients = document.createElement('h4')
    ingredients.innerText =
      'Ingredients : ' +
      el.strIngredient1 +
      ' , ' +
      el.strIngredient2 +
      ' , ' +
      el.strIngredient3 +
      ' , ' +
      el.strIngredient4 +
      ' , ' +
      el.strIngredient5 +
      ' , ' +
      el.strIngredient6 +
      ' , ' +
      el.strIngredient7 +
      ' , ' +
      el.strIngredient8 +
      ' , ' +
      el.strIngredient9 +
      ' , ' +
      el.strIngredient10
    let instructions = document.createElement('h4')
    instructions.innerText = 'Instructions : ' + el.strInstructions

    let tags = document.createElement('h4')
    tags.innerText = 'Tags : ' + el.strTags
    let id = document.createElement('h4')
    id.innerText = 'Id : ' + el.idMeal
    div1.append(name, Area, category, ingredients, instructions, tags, id)
    main_div.append(image, div1)
    document.getElementById('container').append(main_div)
  })
}
ShowRecipeData()

