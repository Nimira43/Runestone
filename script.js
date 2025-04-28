const mainPage = document.querySelector('.main-page')
const loginPage = document.querySelector('.login-page')
const middleContent = document.querySelector('.middle-content')

const btnTop = document.querySelector('.btn-top')
const newFeedPage = document.querySelector('.feeds-page')
const loginModal = document.querySelector('.login-modal')
const modalX = document.querySelector('.login-modal i')
const loginFormBtn = document.querySelector('.login-form-btn')
const postBtn = document.querySelector('.post-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modal = document.querySelector('.modal')
const postModalX = document.querySelector('.modal-header i')
const modalPostBtn = document.querySelector('.modal-header button')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')
// const btnTop = document.querySelector('.btn-top')

const goToLoginPage = () => {
  mainPage.style.display = 'none'
  loginPage.style.display = 'grid'
}

middleContent.addEventListener('click', e => {
  if (e.target.classList[1] === 'main-btn') {
    goToLoginPage()
  }
})