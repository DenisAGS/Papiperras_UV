let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // El usuario se está desplazando hacia arriba
    document.getElementById("header").style.top = "0";
  } else {
    // El usuario se está desplazando hacia abajo
    document.getElementById("header").style.top = "-100px";
  }

  prevScrollPos = currentScrollPos;
};
