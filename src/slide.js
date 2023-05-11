const content_slides = document.querySelectorAll(`#${contentshow.id} [role="list"] .slide`)

const select1 = document.querySelector('#select1')
select1.addEventListener('click', () => {
  content_slides[0].classList.add('active')
  content_slides[1].classList.remove('active')
  content_slides[2].classList.remove('active')
  select1.classList.add('h2_active')
  select2.classList.remove('h2_active')
  select3.classList.remove('h2_active')
})

const select2 = document.querySelector('#select2')
select2.addEventListener('click', () => {
  content_slides[0].classList.remove('active')
  content_slides[1].classList.add('active')
  content_slides[2].classList.remove('active')
  select1.classList.remove('h2_active')
  select2.classList.add('h2_active')
  select3.classList.remove('h2_active')
})

const select3 = document.querySelector('#select3')
select3.addEventListener('click', () => {
  content_slides[0].classList.remove('active')
  content_slides[1].classList.remove('active')
  content_slides[2].classList.add('active')
  select1.classList.remove('h2_active')
  select2.classList.remove('h2_active')
  select3.classList.add('h2_active')
})

const switch_label = document.querySelector('#switch_label')
const checkbox = document.querySelector('#my_checkbox')
const slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`)
switch_label.addEventListener('click', () => {
  if (checkbox.checked) {
    slides[0].classList.remove('active')
    slides[1].classList.add('active')
  } else {
    slides[0].classList.add('active')
    slides[1].classList.remove('active')
  }
})
