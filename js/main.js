const elList = document.querySelector('#hero__box');
const elBtnReload = document.querySelector('.btn-reload');
let counting = 1;
const resArr = [];

board.forEach(b => {
  const btn = document.createElement('button');
  btn.classList.add('hero__btn');
  btn.id = b.id;

  elList.appendChild(btn);
})
const elBtns = document.querySelectorAll('.hero__btn');

elBtnReload.addEventListener('click', function() {
  window.location.reload();
})

elList.addEventListener('click', evt => {

  if (counting % 2 != 0) {
    evt.target.dataset.id = xo[0].id;
    evt.target.classList.add('x-active');
    evt.target.disabled = true;
    for(let i of board){
      if (i.id == evt.target.id) {
        i.xo = 1;
        checking('x');
      }
    }
  } else {
    evt.target.dataset.id = xo[1].id;
    evt.target.classList.add('o-active');
    evt.target.disabled = true;
    for(let i of board){
      if (i.id == evt.target.id) {
        i.xo = 2;
        checking('o');
      }
    }
  }


  elList.className = '';
  elList.dataset.id = '';

  counting += 1;
})

function checking(e) {
  if (elBtns[2].dataset.id == e && elBtns[5].dataset.id == e && elBtns[8].dataset.id == e ||
      elBtns[1].dataset.id == e && elBtns[4].dataset.id == e && elBtns[7].dataset.id == e ||
      elBtns[0].dataset.id == e && elBtns[3].dataset.id == e && elBtns[6].dataset.id == e ||
      elBtns[2].dataset.id == e && elBtns[1].dataset.id == e && elBtns[0].dataset.id == e ||
      elBtns[5].dataset.id == e && elBtns[4].dataset.id == e && elBtns[3].dataset.id == e ||
      elBtns[8].dataset.id == e && elBtns[7].dataset.id == e && elBtns[6].dataset.id == e ||
      elBtns[2].dataset.id == e && elBtns[4].dataset.id == e && elBtns[6].dataset.id == e ||
      elBtns[0].dataset.id == e && elBtns[4].dataset.id == e && elBtns[8].dataset.id == e) {
    alert(`winner is ${e}`);


    elBtnReload.classList.remove('d-none');
  }
}