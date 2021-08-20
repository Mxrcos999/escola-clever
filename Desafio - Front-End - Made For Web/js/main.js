//animação carrossel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        320:{
            items:1,
            nav:false
        },
       /*732*/  320:{
            items:2,
            nav:true,
            loop:false
        },
        1024:{
            items:2,
            nav:true,
            loop:false
        }
    }
})


//anima botão header
const btnH = document.querySelectorAll('.apresentacao a[href^="#"]');

btnH.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  })
  
  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }
  
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
  }
  
  function scrollToPosition(to) {

    smoothScrollTo(0, to);
  }
  

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
   
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

//anima botão contato
const btnC = document.querySelectorAll('.interesse a[href^="#"]');

btnC.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
  })
  
  function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
  }
  
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
  }
  
  function scrollToPosition(to) {

    smoothScrollTo(0, to);
  }
  

  function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
   
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

  //formulario
  function validacampo(){
    var retorna = true;
    if(document.formContato.nome.value ==""){
        alert("O campo nome é obrigatorio!");
        retorna=false;
    }
    if(retorna == true){
      if(document.formContato.telefone.value ==""){
          alert("O campo telefone é obrigatorio!");
          retorna=false;
      }
}}