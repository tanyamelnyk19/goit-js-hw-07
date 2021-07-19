const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.addEventListener('input', changeTextStyle);

function changeTextStyle() {
    text.style.fontSize = input.value + 'px';
}