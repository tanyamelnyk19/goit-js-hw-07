const categoryItems = document.querySelectorAll('.item');
console.log(`В списке ${categoryItems.length} категории.`);

const categoryItemContent = [...categoryItems].map(categoryItem => {
    const categoryItemTitle = categoryItem.querySelector('h2');
    const categoryItemEL = categoryItem.querySelectorAll('li');
    return `Категория: ${categoryItemTitle.textContent}, Количество элементов: ${categoryItemEL.length}; `;
}).join('');
console.log(categoryItemContent);