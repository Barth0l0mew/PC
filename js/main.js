let  days= new Date();
let day = document.querySelector('.day')
let hour = document.querySelector('.hour')
let min = document.querySelector ('.min') 
let sec = document.querySelector('.sec')
let btn = document.querySelectorAll('.btn')
let mod = document.querySelector('.modal')
let close = document.querySelector('.modal__close')
let link = document.querySelectorAll('.logo-menu__link')
console.log(window.pageYOffset)
function time (){
    let  days= new Date();
day.innerHTML  = days.getDate();
hour.innerHTML = days.getHours();
min.innerHTML = days.getMinutes();
sec.innerHTML = days.getSeconds();

}
function scroll( n){
    if (n==0){
        window.scrollBy(0, 1036)
    }

}
function modal(){
    mod.classList.toggle('active')
}
setInterval( time , 1000);
time();

// link[0].addEventListener('click',function(event){window.scrollBy({top:1036,left:0,behavior:"smooth"}); event.preventDefault()})
// link[1].addEventListener('click',function(event){window.scrollBy({top:1823,left:0,behavior:"smooth"}); event.preventDefault()})
// link[2].addEventListener('click',function(event){window.scrollBy({top:2458,left:0,behavior:"smooth"}); event.preventDefault()})
for (let key of btn){
    key.addEventListener('click', modal);
}
close.addEventListener('click',modal)


