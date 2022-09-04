// import { navbar } from './navbar.js'

// const navbarDiv = document.getElementById('navBar')
// navbarDiv.innerHTML = navbar()

async function getdata() {
  // event.preventDefault()
  const search = document.getElementById('search').value
  try {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    const res = await fetch(url)
    const data = await res.json()
    localStorage.setItem('Meal', JSON.stringify(data))
    displayData(data.meals)
  } catch (error) {
    console.log(error, 'err')
  }
}
// getdata()
document.getElementById('searchBtn').addEventListener('click', getdata)

function displayData(meal) {
  //let meal = JSON.parse(localStorage.getItem('Meal')) || []
  // console.log(meal)
  document.getElementById('food').innerHTML = ''
  meal.map((el) => {
    let main_div = document.createElement('div')
    main_div.id = 'mainDiv'
    main_div.style.display = 'flex'
    let div1 = document.createElement('div')
    div1.id = 'div1'
    let image = document.createElement('img')
    image.id = 'food_image'
    image.src = el.strMealThumb
    let name = document.createElement('h1')
    name.innerText = 'Name : ' + el.strMeal
    let Area = document.createElement('h1')
    Area.innerText = 'Type : ' + el.strArea
    let category = document.createElement('h1')
    category.innerText = 'Category : ' + el.strCategory
    let tags = document.createElement('h1')
    tags.innerText = 'Tags : ' + el.strTags
    let id = document.createElement('h1')
    id.innerText = 'Id : ' + el.idMeal
    div1.append(name, Area, category, tags, id)
    main_div.append(image, div1)
    document.getElementById('food').append(main_div)
  })
}
// displayData()

var loggedInUser = JSON.parse(localStorage.getItem('signup')) || []
console.log(loggedInUser[0].name)
document.querySelector('#n').innerText = loggedInUser[0].name
// document.querySelector('#s').style.display = 'none'

// idMeal: "52777"
// strArea: "Italian"
// strCategory: "Seafood"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "mozzarella balls"
// strIngredient2: "baby plum tomatoes"
// strIngredient3: "fresh basil"
// strIngredient4: "farfalle"
// strIngredient5: "extra virgin olive oil"
// strIngredient6: "Green Olives"
// strIngredient7: "tuna"
// strIngredient8: "salt"
// strIngredient9: "pepper"
// strIngredient10: ""
// strIngredient11: ""
// strIngredient12: ""
// strIngredient13: ""
// strIngredient14: ""
// strIngredient15: ""
// strIngredient16: null
// strIngredient17: null
// strIngredient18: null
// strIngredient19: null
// strIngredient20: null
// strInstructions: "Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving."
// strMeal: "Mediterranean Pasta Salad"
// strMealThumb: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg"
// strMeasure1: "200 g"
// strMeasure2: "250 g"
// strMeasure3: "1  bunch"
// strMeasure4: "350 g"
// strMeasure5: "3  tablespoons"
// strMeasure6: "40 g"
// strMeasure7: "200 g"
// strMeasure8: "to taste"
// strMeasure9: "to taste"
// strMeasure10: ""
// strMeasure11: ""
// strMeasure12: ""
// strMeasure13: ""
// strMeasure14: ""
// strMeasure15: ""
// strMeasure16: null
// strMeasure17: null
// strMeasure18: null
// strMeasure19: null
// strMeasure20: null
// strSource: "https://thelemonsqueezy.com/recipe/mediterranean-pasta-salad/"
// strTags: "Pasta,Baking"
// strYoutube: "https://www.youtube.com/watch?v=e52IL8zYmaE"
