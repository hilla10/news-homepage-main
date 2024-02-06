body = document.getElementById('body');
hamburger = document.querySelector('.hamburger');
sideNave = document.querySelector('.side__nav');


hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    sideNave.classList.toggle('active');
    body.classList.toggle('active');
});

document.addEventListener('click', function (event) {
    var target = event.target;
    if(!target.closest('.side__nav') && !target.closest('.hamburger')) {
        hamburger.classList.remove('active');
        sideNave.classList.remove('active');
        body.classList.remove('active');
    }
})
