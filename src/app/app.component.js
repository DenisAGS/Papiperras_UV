const navbarIcon = document.querySelector('.navbar-icon');
const navbarList = document.querySelector('.navbar ul');

navbarIcon.addEventListener('click', function() {
  navbarList.classList.toggle('show');
});
