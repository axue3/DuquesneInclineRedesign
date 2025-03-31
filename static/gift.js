$(document).ready(function() {
    const track = $(".gift-carousel .carousel-track");
    const images = $(".gift-carousel img");
    let index = 0;
    const slideDuration = 5000; // 5 seconds

    function slideNext() {
        index = (index + 1) % images.length;
        updateCarousel();
    }

    function updateCarousel() {
        track.css("transform", `translateX(-${index * 100}%)`);
    }

    // Manual controls
    $(".carousel-arrow.prev").click(() => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });

    $(".carousel-arrow.next").click(slideNext);

    // Auto-advance
    let interval = setInterval(slideNext, slideDuration);

    // Pause on hover
    $(".gift-carousel").hover(
        () => clearInterval(interval),
        () => interval = setInterval(slideNext, slideDuration)
    );
});