const input = document.querySelector('#validation-input');

input.addEventListener('change', checkValidation);

function checkValidation({target: { value, dataset }}) {
    // if (input.value.length == input.dataset.length) {
    //     // input.classList.add('valid');
    //     // input.classList.remove('invalid');
    //     toggleClass('valid', 'invalid');
    // } else {
    //     // input.classList.add('invalid');
    //     // input.classList.remove('valid');
    //     toggleClass('invalid', 'valid');
    // }
    value.length == dataset.length
        ? toggleClass('valid', 'invalid')
        : toggleClass('invalid', 'valid');
};

function toggleClass(add, remove) {
    input.classList.add(add);
    input.classList.remove(remove);
}