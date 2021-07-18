const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientLi = ingredients.map(ingredient => {
  const ingredientEL = document.createElement('li');
  // ingredientEL.textContent = ingredient;
  ingredientEL.innerHTML = `<p>${ingredient}</p>`;
  return ingredientEL;
});

const ingredientsCategory = document.querySelector('#ingredients');
ingredientsCategory.append(...ingredientLi);
console.log(ingredientsCategory);