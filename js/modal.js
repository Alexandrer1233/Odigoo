const btn = document.querySelector('.header__link--open');

btn.addEventListener('click', function() {
  openModal()
  addActive()
})

const modal = document.querySelector('.modal');
 function openModal() {
  modal.innerHTML = `
  <div class="modal__box">
  <div class="modal__content">
  <h2 class="modal__title">Войти</h2>
     <button class="modal__close">
     <img src="./img/modalClose.png" alt="Close">
       </div>
       </button>
       <form class="form">
       <input class="form__input-from"  type="email" placeholder="Email">
       <input class="form__input-from" type="password" placeholder="Password">
     <div class="form__check">
     <input class="form__input-check" type="checkbox" name="" id="">
     <p class="form__check-title">Запомнить меня</p>
       </div>
       <button type="submit" class="form__btn">Войти</button> 
       </form>
       </div>
       `;
       const btnCLose = document.querySelector('.modal__close');
         btnCLose.addEventListener('click', () => closeModal());
}

function closeModal() {
  modal.classList.remove('open')
}

window.addEventListener('click', (e) => {
  if(e.target === modal) {
    closeModal()
  }
})

window.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') {
    modal.classList.remove('open')
  }
})

function addActive() {
  modal.classList.add('open')
}




  

    




