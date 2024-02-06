const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        button.innerHTML = button.innerHTML === '+' ? '-' : '+';
        const answer = button.parentElement.nextElementSibling;
        answer.classList.toggle('hidden')
    })

});