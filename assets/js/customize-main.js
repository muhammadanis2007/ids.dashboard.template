let list = document.querySelectorAll('.navigation li');
let toggle =document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    console.log("click fired from Toggle Button.")
navigation.classList.toggle('active');
main.classList.toggle('active');
}

function ActiveLink(){
list.forEach((item)=> item.classList.remove('hovered'));
this.classList.add('hovered');
}

list.forEach((item) => item.addEventListener('mouseover',ActiveLink));