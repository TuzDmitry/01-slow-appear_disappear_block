let box = document.getElementById('box');

// document.querySelector('button').onclick=function (){
//     console.log('hi dude');
//     box.classList.toggle('visuallyhidden');
//     box.classList.toggle('hidden');
// };
let addHidden = function () {
    box.classList.add('hidden');
}
document.querySelector('button').onclick=function (){
    console.log('hi dude');
    if (box.classList.contains('visuallyhidden')) {
        box.classList.remove('hidden');
        box.removeEventListener('transitionend', addHidden, false);
        setTimeout(function(){box.classList.remove('visuallyhidden');}, 0);
    } else {
        box.classList.add('visuallyhidden');
        box.addEventListener('transitionend', addHidden, false);
    }

};



