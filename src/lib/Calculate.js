export const calculateIngredient = meal => {
  let ingredients = []
  let totalIngredient = 0
  for (let i = 1; i <= 20; i++) {
    ingredients.push(`strIngredient${i}`)
  }
  const filterIngredients = Object.keys(meal)
    .filter(key => ingredients.includes(key))
    .reduce((obj, key) => {
      obj[key] = meal[key]
      return obj
    }, {})

  Object.size = function (obj) {
    var size = 0,
      key
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++
    }
    return size
  }
  const cleanObj = clean(filterIngredients)
  totalIngredient = Object.size(cleanObj)
  return totalIngredient
}

function clean(obj) {
  for (var propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ""
    ) {
      delete obj[propName]
    }
  }
  return obj
}
