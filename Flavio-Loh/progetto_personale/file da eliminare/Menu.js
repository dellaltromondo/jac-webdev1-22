
function showMenu() {
  const expMenuElement = document.getElementById('expanded-menu');

  if (getComputedStyle(expMenuElement).display !== 'block') {
    expMenuElement.style.display = 'block';
  } else {
    expMenuElement.style.display = 'none';
  }
}
