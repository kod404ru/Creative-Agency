document.addEventListener('DOMContentLoaded', function (event) {

  //header burger=========================================================================
  const headerBurgerBtn = document.querySelector('#headerBurger'),
    headerNav = document.querySelector('#headerNav'),
    body = document.querySelector('body'),
    intro = document.querySelector('#intro'),
    shadow = document.querySelector('.shadow'),
    introBtnLabel = document.querySelector('.intro__scroll-down--label'),
    introBtnCircle = document.querySelector('.intro__scroll-down--btn'),
    cFormBtn = document.querySelector('.form-c__btn-unit'),
    formInputs = document.querySelectorAll('.form-c__input')

  headerBurgerBtn.addEventListener('click', function () {
    this.classList.toggle('active')
    if (this.classList.contains('active')) {
      headerNav.classList.add('active')
      body.classList.add('body-lock')
      intro.classList.add('shadow')
    } else {
      headerNav.classList.remove('active')
      body.classList.remove('body-lock')
      intro.classList.remove('shadow')
    }
  })
  introBtnLabel.addEventListener('mouseenter', function () {
    introBtnCircle.classList.add('circle-hover')
  })
  introBtnLabel.addEventListener('mouseleave', function () {
    introBtnCircle.classList.remove('circle-hover')
  })

  introBtnCircle.addEventListener('mouseenter', function () {
    this.classList.add('circle-hover')
  })
  introBtnCircle.addEventListener('mouseleave', function () {
    this.classList.remove('circle-hover')
  })


  //form==========================================================
  for (let item of formInputs) {
    item.addEventListener('focus', function () {
      this.classList.remove('form-error')
      this.classList.add('form-hover-border')
      this.value = ''
    })
    item.addEventListener('blur', function () {
      this.classList.remove('form-hover-border')
      if (this.value.length == 0) {
        this.classList.add('form-error')
        let dataMessage = this.dataset.message
        this.value = `You didn't enter ${dataMessage}`
      }
    })
    cFormBtn.addEventListener('click', function (e) {
      if (item.classList.contains('form-error')) {
        e.preventDefault()
        alert('Вы неправильно заполнили форму. Try it now')
      }
    })
  }

  //Плавная прокрутка с section intro до section w==========================

  const anchors = document.querySelectorAll('.intro__scroll-down');

  anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const w = document.querySelector('#w').scrollIntoView({
        behavior: 'smooth',
        block: 'end'
      })
    })
  })

  const upButton = document.querySelector('#up');

  window.addEventListener('scroll', function () {
    if (this.pageYOffset > 750) {
      upButton.classList.add('visible');
    } else {
      upButton.classList.remove('visible');
    }
  })


  upButton.addEventListener('click', function (event) {
    event.preventDefault();
    const top = document.querySelector('#header').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })



});