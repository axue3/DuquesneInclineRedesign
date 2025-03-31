document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-track img');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
  
    function updateCarousel() {
      images.forEach((img, index) => {
        img.classList.toggle('active', index === currentIndex);
      });
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    });
  

    images[0].classList.add('active');
  });