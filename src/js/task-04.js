// const counterValueSpan = document.querySelector('#value');
// const incrementButton = document.querySelector('[data-action="increment"]');
// const decrementButton = document.querySelector('[data-action="decrement"]');

const [decrementButton, counterValueSpan, incrementButton] = document.querySelector('#counter').children;

incrementButton.addEventListener('click', () => {
    counterValueSpan.textContent = +counterValueSpan.textContent + 1});

decrementButton.addEventListener('click', () => {
    counterValueSpan.textContent -= 1});



