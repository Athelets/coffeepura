// This script runs after the HTML document has been fully loaded.
document.addEventListener('DOMContentLoaded', function() {

    // Initialize Feather Icons
    // This function finds all elements with a `data-feather` attribute and replaces them with SVG icons.
    feather.replace();

    // --- Navbar Scroll Effect ---
    // Get the navbar element from the DOM.
    const navbar = document.getElementById('navbar');
    
    // Check if the navbar element exists to avoid errors.
    if (navbar) {
        // Add a scroll event listener to the window.
        window.onscroll = function () {
            // If the user has scrolled more than 50 pixels down the page...
            if (window.scrollY > 50) {
                // ...add the 'scrolled' class to the navbar. This can be used for styling, like changing the background color.
                navbar.classList.add('scrolled');
            } else {
                // ...otherwise, remove the 'scrolled' class.
                navbar.classList.remove('scrolled');
            }
        };
    }
    
    // --- Close Mobile Nav on Link Click ---
    // Get all the navigation links.
    const navLinks = document.querySelectorAll('.nav-link');
    // Get the collapsible menu element.
    const menuToggle = document.getElementById('navbarNav');
    
    // Check if the menu toggle element exists.
    if (menuToggle) {
         // Create a new Bootstrap Collapse instance. The `{toggle: false}` option prevents it from opening on initialization.
        const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
        
        // Loop through each navigation link.
        navLinks.forEach((link) => {
            // Add a click event listener to each link.
            link.addEventListener('click', () => { 
                // If the screen width is less than 992px (the lg breakpoint in Bootstrap), it's likely a mobile view.
                if (window.innerWidth < 992) {
                   // Close the collapsible menu.
                   bsCollapse.toggle(); 
                }
            });
        });
    }
});
