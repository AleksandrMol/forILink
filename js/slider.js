document.addEventListener('DOMContentLoaded', function(){
    let sliderCntnr = document.querySelector('.slider-container');
    let wrapper = document.querySelector('.slider-wrapper');
    let slides = document.querySelectorAll('.slide');
    let btnNext = document.querySelector('.next-button');
    let btnBack = document.querySelector('.back-button');
    let balls = document.querySelectorAll('.ball');
    let slideNumber = 0;

    function swiper (){
        btnNext.addEventListener('click', function(){
            if (slideNumber < slides.length - 1) {
                balls[slideNumber].classList.toggle('active-ball');
                slideNumber ++ ;
                balls[slideNumber].classList.toggle('active-ball');
            }
            else{
                balls[slideNumber].classList.toggle('active-ball');
                slideNumber = 0;
                balls[slideNumber].classList.toggle('active-ball');
            }
            wrapper.style.left = -slideNumber * sliderCntnr.offsetWidth + 'px';
        });

        btnBack.addEventListener('click', function(){
            if (slideNumber > 0) {
                balls[slideNumber].classList.toggle('active-ball');
                slideNumber -- ;
                balls[slideNumber].classList.toggle('active-ball');
            }
            else{
                balls[slideNumber].classList.toggle('active-ball');
                slideNumber = slides.length -1;
                balls[slideNumber].classList.toggle('active-ball');
            }
            wrapper.style.left = -slideNumber * sliderCntnr.offsetWidth + 'px';
        });
    }
    swiper();
});