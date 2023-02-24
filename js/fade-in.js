function fadeInOnScroll() {
    let fadeIns = document.querySelectorAll('.fade-in');
  
    fadeIns.forEach(fadeIn => {
      let fadeInPosition = fadeIn.getBoundingClientRect().top;
      let screenPosition = window.innerHeight;
  
      if (fadeInPosition < screenPosition) {
        fadeIn.classList.add('appear');
      }
    });
  }
  
  window.addEventListener('scroll', fadeInOnScroll);