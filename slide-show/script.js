const main = document.querySelector("main");
main.style.backgroundImage = `url(${images[0]})`;

function goto() {
    main.style.opacity = 0
    setTimeout(() => {
        main.style.backgroundImage = `url(${images[currentImageIndex]})`;
        main.style.opacity = 1;
    }, 500);
}
leftButton.addEventListener("click", function () {
    goBack();
    goto();
});

rightButton.addEventListener("click", function () {
    goForward();
    goto();
});

// setInterval(function() {
//   goForward();
//   goto();
// }, 1300);