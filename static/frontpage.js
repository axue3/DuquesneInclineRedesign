$(document).ready(function() {
  const track = $(".carousel-track");
  const images = $(".carousel-track img:not(.clone)");
  let index = 0;
  const slideDuration = 4000;

  function slideNext() {
    index++;
    
    track.css("transform", `translateX(-${index * 100}%)`);
    

    if (index >= images.length) {
      setTimeout(() => {
        track.css("transition", "none");
        track.css("transform", "translateX(0)");
        index = 0;
        setTimeout(() => track.css("transition", "transform 0.5s ease-in-out"), 10);
      }, 500);
    }
  }
  $('.read-more').click(function() {
    $('.expanded-content').toggleClass('active');
    $(this).toggleClass('active');
    $(this).text(function(i, text) {
      return text === "Show More" ? "Show Less" : "Show More";
    });
  });

  setInterval(slideNext, slideDuration);
});