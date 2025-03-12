document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".img-container img");
    let index = 0;

    function showNextImage() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }

    // Start slideshow
    images[index].classList.add("active");
    setInterval(showNextImage, 5000);
});
