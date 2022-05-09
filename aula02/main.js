window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll ()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {

if (scrollY > 0) {
  navigation.classList.add('scroll')
} else {
  navigation.classList.remove('scroll')
}
 // comentario no JS
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,

}).reveal('#home, #home img, #home .stats, #services, #services header, #services .cards, #about, #about header, #about .content');

// string (textos)
// number (número)
// boolean (true | false)
// IGUAL É == dois sinais, serve para comparação