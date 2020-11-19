let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);


btn.addEventListener('click', function() {
    box.scrollTop = 0;
});

scrollBy(0, 200);

scrollTo(0, 200);