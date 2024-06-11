//lytte  efter klik på burger 
//tilføj/fjerne show-menu fra ul
const burgerIcon = document.querySelector('.burger')
const nav = document.querySelector('.pageheader__nav ul')

burgerIcon.addEventListener('click', function() {
  nav.classList.toggle('show-menu')
})