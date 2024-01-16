function createSVG() {
    return `<svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"></path>
        </svg>`
}

const leftButton = document.querySelector("button.left");
const rightButton = document.querySelector("button.right");
const svg = createSVG();
leftButton.innerHTML = svg;
rightButton.innerHTML = svg;


