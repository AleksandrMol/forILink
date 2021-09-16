document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.getElementById('name');
    let genderInput = document.getElementById('gender');
    let countryInput = document.getElementById('country');
    let cityInput = document.getElementById('city');
    let birthInput = document.getElementById('birth');

    let secondInputCntnr = document.querySelector('.second-load');
    let thridInputCntnr = document.querySelector('.third-load');

    let button = document.querySelector('.fotm-button');
    let checkbox = document.querySelector('.categories-checkbox');
    let timeoutID;

    function inputCleaner () {
        nameInput.value = '';
        genderInput.value = '';
        countryInput.value = '';
        cityInput.value = '';
        birthInput.value = ''; 
    }

    function birthInputChanger() {
        birthInput.addEventListener('focus' ,function (){
            birthInput.type = 'date';
        });
    }
    
    inputCleaner();
    birthInputChanger();

    countryInput.addEventListener('input', function(){
        window.clearTimeout(timeoutID);
        timeoutID = window.setTimeout(thirdInputLoader, 1000);
    });

    cityInput.addEventListener('input', function(){
        window.clearTimeout(timeoutID);
        timeoutID = window.setTimeout(thirdInputLoader, 1000);
    });

    birthInput.addEventListener('input', function(){
        window.clearTimeout(timeoutID);
        timeoutID = window.setTimeout(thirdInputLoader, 1000);
    });

    nameInput.addEventListener('input', function(){
        window.clearTimeout(timeoutID);
        timeoutID = window.setTimeout(secondInputLoader, 1000);
    });
    genderInput.addEventListener('input', function(){
        window.clearTimeout(timeoutID);
        timeoutID = window.setTimeout(secondInputLoader, 1000);
    });

    function secondInputLoader() {
        if (nameInput.value != '' &&  genderInput.value != '') {
            secondInputCntnr.classList.add('loaded');
        }
    }

    function thirdInputLoader() {
        if (countryInput.value != '' &&  cityInput.value != '' && birthInput.value != '') {
            thridInputCntnr.classList.add('loaded');
            button.removeAttribute('disabled');
            checkbox.checked = 'true';
        }
    }
});