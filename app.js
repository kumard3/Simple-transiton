const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelector('.nav-links li');


burger.addEventListener('click', ()=>{
    nav.classList.toggle(`nav-active`);

    navLink.forEach(link,index => {
        if(link.style.animation){
            link.style.animation='';
        }else{
            link.style.animation=`navLinkFade 0.5s ease forward ${index / 7+ 0.3}s`
        }
        
    });
})

}
navslide();

function smoothscroll(target , duration){
    var target = document.querySelector(target);
    var targetPosition =target.getBoundingClientRect().top;
    var startPositon = window.pageYOffset;
    var distance = targetPosition - startPositon;
    var startTime = null;
    function animation(currentTime ){
        if(startTime===null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPositon,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration)
        requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
        t--;
        return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
    };
    
    requestAnimationFrame(animation);
}

var section1 = document.querySelector('.section1');
var section2 = document.querySelector('.section2');
var section3 = document.querySelector('.section3');
var section4 = document.querySelector('.section4');

section1.addEventListener('click', function(){
    smoothscroll('.effect1',1000);
})
section2.addEventListener('click', function(){
    smoothscroll('.effect2',1000);
})
section3.addEventListener('click', function(){
    smoothscroll('.effect3',1000);
})
section4.addEventListener('click', function(){
    smoothscroll('.effect4',1000);
})
var effect1 = document.querySelector('.effect1');
var effect2 = document.querySelector('.effect2');
var effect3 = document.querySelector('.effect3');
var effect4 = document.querySelector('.effect4');
effect1.addEventListener('click', function(){
    smoothscroll('.section1',1000);
})
effect2.addEventListener('click', function(){
    smoothscroll('.section2',1000);
})
effect3.addEventListener('click', function(){
    smoothscroll('.section3',1000);
})
effect4.addEventListener('click', function(){
    smoothscroll('.section4',1000);
})

