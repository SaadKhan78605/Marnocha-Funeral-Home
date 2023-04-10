
// Custom JavaScript For Hamburger Menu Button

let hamburger = document.querySelector('.hamburger');
let headerBottom = document.querySelector('.header-bottom');

hamburger.addEventListener('click', function(){
    headerBottom.classList.toggle('show');
    hamburger.classList.toggle('burg');
})


// This is for auto close hamburger menu content

document.addEventListener('click', (event) => {
  const isClickInsideMenu = hamburger.contains(event.target);
  const isClickInsideContent = headerBottom.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideContent) {
    hamburger.classList.remove('burg');
    headerBottom.classList.remove('show');
  }
});


const links = document.querySelectorAll('.header-bottom a');

// Add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('burg');
    headerBottom.classList.remove('show');
  });
});
