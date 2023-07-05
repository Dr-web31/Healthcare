window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNav'); // Get the navbar element
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop; // Get the scroll position
    
    if (scrollPosition >= 200) {
      navbar.classList.add('navbar-blue'); // Add the CSS class for blue background and white fonts
    } else {
      navbar.classList.remove('navbar-blue'); // Remove the CSS class if the scroll position is less than 200
    }
  });