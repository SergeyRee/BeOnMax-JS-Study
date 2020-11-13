let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// btn[0].addEventListener('click', function(event){
//     console.log("Произошло событие: " + event.type + ' на эллементе ' + event.target )
// });

// wrap.addEventListener('click', function() {
//     console.log("Произошло событие: " + event.type + ' на эллементе ' + event.target )
// });

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log("Произошло событие: " + event.type + ' на эллементе ' + event.target )
});

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function(){
        console.log('Out');
    });
});