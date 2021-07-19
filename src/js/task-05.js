const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
        // if (nameInput.value.trim() === '') {
        //     nameOutput.textContent = 'незнакомец';
        // } else {
        //     nameOutput.textContent = event.target.value;
        // }
    
    // nameInput.value.trim() === ''
    // ? nameOutput.textContent = 'незнакомец'
    //     : nameOutput.textContent = event.target.value;
    
    nameOutput.textContent = nameInput.value.trim() === ''
    ? 'незнакомец'
    : event.target.value;
});
