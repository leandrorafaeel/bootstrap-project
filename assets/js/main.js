let btnSubir = document.querySelector("#btn-subir");

window.onscroll = function(){
    if(pageYOffset > 250){
        btnSubir.style.display = "block";
    }else{
        btnSubir.style.display = "none"
    }
}


// Progress bar

//circle a
let containerA = document.getElementById("circleA");

let circleA = new ProgressBar.Circle(containerA, {

    color: '#fff',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa'},
    to: { color: '#fc5185'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

    
        var value = Math.round(circle.value() * 500);
        circle.setText("+" + value);
    }
});
    
//circle b
let containerB = document.getElementById("circleB");
let circleB = new ProgressBar.Circle(containerB, {

    color: '#fff',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa'},
    to: { color: '#fc5185'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

    var value = Math.round(circle.value() * 125);
        circle.setText(value);
    }
});

//circle c
let containerC = document.getElementById("circleC");
let circleC = new ProgressBar.Circle(containerC, {

    color: '#fff',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa'},
    to: { color: '#fc5185'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

    var value = Math.round(circle.value() * 26);
        circle.setText(value);
    }
});

//circle d
let containerD = document.getElementById("circleD");
let circleD = new ProgressBar.Circle(containerD, {

    color: '#fff',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#aaa'},
    to: { color: '#fc5185'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

    var value = Math.round(circle.value() * 1000);
        circle.setText("+" + value);
    }
});
// iniciando loaders quando a usuário chegar no elemento
let dataAreaOffset = $('#dados').offset();
// stop serve para a animação não carregar mais que uma vez
let stop = 0;

$(window).scroll(function (e) {

  let scroll = $(window).scrollTop();

  if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
    circleA.animate(1.0);
    circleB.animate(1.0);
    circleC.animate(1.0);
    circleD.animate(1.0);

    stop = 1;
  }

});
    


//owl carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 20,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
        }
    })
});

//projetos ativos
let btnAll = document.querySelector("#btn-all");
let btnWeb = document.querySelector("#btn-web");
let btnMobile = document.querySelector("#btn-mobile");
let btnDesign = document.querySelector("#btn-design");

btnAll.addEventListener("click", function(){
    checkButton(btnWeb, btnMobile, btnDesign, this);
})

btnWeb.addEventListener("click", function(){
    checkButton(btnAll, btnMobile, btnDesign, this);
})

btnMobile.addEventListener("click", function(){
    checkButton(btnAll, btnWeb, btnDesign, this);
})

btnDesign.addEventListener("click", function(){
    checkButton(btnAll, btnWeb, btnMobile, this);
})

function checkButton(btn, btn2, btn3, check){
    btn.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");

    check.classList.add('active');
}

//isotope
$('.items').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$('.botoes button').click(function(){

    var selector = $(this).attr('data-filter');

    $('.items').isotope({
        filter: selector
    });
});

//atualizando o ano do footer
function copyright(){
    const ano = document.querySelector(".ano");
    ano.textContent = new Date().getFullYear();
}
copyright();