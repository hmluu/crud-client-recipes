const API_URL = 'http://localhost:3000/api/v1/recipes'

export function getAllRecipes (){
  return fetch(API_URL)
    .then(res => res.json());
}

export function getRecipe(id) {
  return fetch(`${API_URL}/${id}`)
    .then(res => res.json());
}

export function createRecipe(recipe) {
  return fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(recipe),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json());
}

export function updateRecipe(id, recipe) {
  return fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(recipe),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json());
}