// JavaScript to enable horizontal scrolling with touchpad gestures
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".scrolling-wrapper");

    container.addEventListener("wheel", function(event) {
        if (event.deltaY !== 0) {
            event.preventDefault();
            container.scrollLeft += event.deltaY;
        }
    });
});