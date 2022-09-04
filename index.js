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

