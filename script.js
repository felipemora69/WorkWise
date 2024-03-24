// SECTION SPACES % HIGHLIGHTS
// JavaScript to enable horizontal scrolling with touchpad gestures
document.addEventListener("DOMContentLoaded", function() {
    const solutionsContainer = document.querySelector(".scrolling-wrapper");
    const spacesContainer = document.querySelector(".highlight-wrapper");

    document.addEventListener("wheel", function(event) {
        if (isMouseInElement(event, solutionsContainer)) {
            event.preventDefault();
            if (event.deltaX !== 0) {
                solutionsContainer.scrollLeft += event.deltaX;
            }
        } else if (isMouseInElement(event, spacesContainer)) {
            event.preventDefault();
            if (event.deltaX !== 0) {
                spacesContainer.scrollLeft += event.deltaX;
            }
        }
    });

    function isMouseInElement(event, element) {
        const rect = element.getBoundingClientRect();
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        return mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;
    }
});

//Resnponsive design
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('show');
    this.classList.toggle('open');
});