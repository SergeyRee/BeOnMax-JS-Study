let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
});