let navSize = document.querySelector('.js-nav')
let body = document.querySelector('.body')
let overlayer = document.querySelector('.js-overlayer');
let navBtn = document.querySelector('.js-btn');

const navClass = () => {
  let width = innerWidth;

  if (width <= 990){
    navSize.classList.remove('nav-desktop');
    navSize.classList.add('nav-mobile');
    return
  }

  if (width > 990){
    navSize.classList.remove('nav-mobile');
    navSize.classList.add('nav-desktop');
    return
  }
}

const overflowHidden = () => {
  let width = innerWidth;

  if (width > 750){
    body.style.overflowY = 'auto';
    navBtn.classList.remove('change')
    overlayer.classList.remove('overlayer')
    navSize.classList.remove('expand')
  }
}

const changeNav = (x) => {
  let state = x.classList.toggle('change');
  navSize.classList.toggle('expand');
  overlayer.classList.toggle('overlayer')

  state == true ? 
  body.style.overflowY = 'hidden' : body.style.overflowY = 'auto';  
}

navClass()

window.addEventListener('resize', () => {
  navClass();
  overflowHidden();
})
