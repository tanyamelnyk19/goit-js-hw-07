const categoryItems = document.querySelectorAll('.item');
console.log(`В списке ${categoryItems.length} категории.`);

const categoryItemContent = [...categoryItems].map(categoryItem => {
    const categoryItemTitle = categoryItem.querySelector('h2');
    // console.log('categoryItemTitle :>> ', categoryItemTitle);
    const categoryItemEL = categoryItem.querySelectorAll('li');
    // console.log('categoryItemEL :>> ', categoryItemEL);
    return `Категория: ${categoryItemTitle.textContent}, Количество элементов: ${categoryItemEL.length}; `;

}).join('');
console.log(categoryItemContent);