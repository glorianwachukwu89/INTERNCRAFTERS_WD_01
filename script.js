document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navbarList = document.getElementById('navbar-list');
  
    // Toggle the navbar links on hamburger click
    hamburgerMenu.addEventListener('click', () => {
      navbarList.classList.toggle('show');
    });
  });
  