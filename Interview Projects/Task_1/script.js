//collapsible left menu
const leftMenu = document.getElementById('leftMenu');
const toggle = document.getElementById('toggle');

let isCollapsed = false;

toggle.addEventListener('click', () => {
  if (isCollapsed) {
    leftMenu.style.width = '10%';
    isCollapsed = false;
    leftMenu.classList.remove('collapsed');
  } else {
    leftMenu.style.width = '3.5%';
    isCollapsed = true;
    leftMenu.classList.add('collapsed');
  }
});


//screen width adjustments
function adjustPageScale() {
  const screenWidth = window.innerWidth;
  if (screenWidth > 992 && screenWidth <= 1600) {
    document.body.style.transform = 'scale(0.9)';
  } else if (screenWidth > 700 && screenWidth <= 767) {
    document.body.style.transform = 'scale(0.8)';
  } else if (screenWidth > 600 && screenWidth <= 700) {
    document.body.style.transform = 'scale(0.75)';
  } else if (screenWidth <= 600) {
    document.body.style.transform = 'scale(0.5)';
  } else {
    document.body.style.transform = 'scale(1)';
  }
}

window.addEventListener('resize', adjustPageScale);
adjustPageScale();
