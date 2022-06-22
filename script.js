window.addEventListener('load', (event) =>{
  $('.item-MainMenu').click(function(){
      $(this).find('.submenu').toggleClass('xuathien');
  });
  var ball1 = document.querySelector('.ball1');
  var ball2 = document.querySelector('.ball2');
  var ball4 = document.querySelector('.ball4');
  $(window).scroll(function(e){
      var boxleft = document.querySelectorAll('.boxleft');
      var boxright = document.querySelectorAll('.boxright');
     var x = parseInt($(this).scrollTop());
     if(x >= 10){
        ball1.style = `transform : translateY(${x/6}px)`
        ball2.style = `transform : translateY(${x/6}px)`
        ball4.style = `transform : translateY(${x/6}px)`
     }
    if(x >=10){
        // boxright.style = `transform : translateY(${-1 * x/4}px)`
        // boxleft.style = `transform : translateY(${-1 * x/4}px)`
        [...boxleft].forEach(e => {
            e.style  = `transform : translateY(${-1 * x/4}px)`;
        });
        [...boxright].forEach(e => {
            e.style  = `transform : translateY(${-1 * x/4}px)`;
        });
    }
   
  });
  var first = document.querySelector('.item-bar:first-child');
  var second = document.querySelector('.item-bar:nth-child(2)');
  var thir = document.querySelector('.item-bar:last-child');
  var bar = document.querySelector('.bar');
  var menu = document.querySelector('.menu');
  bar.addEventListener("click" , function(){
      if(second.classList.contains('bienmat')==true){
        first.style = `transform : rotate(0) translateX(0)`
        second.style = `transform : translateX(-0)`
        thir.style = `transform : rotate(-0) translateX(0)`
        second.classList.remove('bienmat');
        menu.style = ` height : 60px`
        menu.classList.add('overflowHidden');
      }
   else{
    first.style = `transform : rotate(45deg) translateX(13px)`
    second.style = `transform : translateX(-50px)`
    thir.style = `transform : rotate(-45deg) translateX(13px)`
    setTimeout(() => {
        second.classList.add('bienmat');
    }, 0);
    menu.style = ` height : 44rem`;
    menu.classList.remove('overflowHidden');
   }
  });
  var login = document.getElementById('login');
  var overlay = document.querySelector('.overlay')
  var FormLogin = document.querySelector('.FormLogin')
  login.addEventListener("click" , function(){
      
    if($('body').hasClass('all')==true){
        $('body,html').removeClass('all');
        FormLogin.style = `display :none!important`;
        overlay.style = `display :none!important`;
    }
    else {
        $('body,html').addClass('all');
    FormLogin.style = `display :flex!important`;
    overlay.style = `display :block!important`;
    FormLogin.classList.remove('animate-Re')
    FormLogin.classList.add('animate');

    }
  })
  overlay.addEventListener("click" , function(){
    if($('body').hasClass('all')==true){
        FormLogin.classList.remove('animate');
        FormLogin.classList.add('animate-Re')
        
        
        setTimeout(() => {
            overlay.style = `display :none!important`;
            $('body,html').removeClass('all');
        FormLogin.style = `display :none!important`;
        }, 300);
    }
  })
});