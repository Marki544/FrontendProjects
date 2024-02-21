const submitButton = document.getElementById('submit-btn');

const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

const labels = document.getElementById('label');
const errorTexts = document.getElementById('error-text');

const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');

const date = new Date();

let hasError = false;

submitButton.addEventListener('click', () => {

    console.log(yearInput.value);

    if(dayInput.value === '' || dayInput.value > 31){
        hasError = true;
        dayInputErrors();
    }else{
        hasError = false;
    }
    if(monthInput.value === '' || monthInput.value > 12){
        monthInputErrors();
    }else{
        hasError = false;
    }

    if(hasError){
        displayGlobalErrors();
    }else{
        calculateAge();
    }

});

const calculateAge = () => {

    let currentDay = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    let calculatedYear = Math.abs(currentYear - yearInput.value);
    let calculatedMonth = Math.abs(currentMonth - monthInput.value);
    let calculatedDay = Math.abs(currentDay - dayInput.value);
    
    years.innerHTML = calculatedYear;
    months.innerHTML = calculatedMonth;
    days.innerHTML = calculatedDay;

}

const displayGlobalErrors = () => {

    if(labels.classList.contains('noerror-label')){
        labels.classList.add('error-label');
    }

    errorTexts.style.display = 'block';

}

const dayInputErrors = () => {

    if(dayInput.classList.contains('noerror')){
        dayInput.classList.add('error');
    }

}

const monthInputErrors = () => {

    if(monthInput.classList.contains('noerror')){
        monthInput.classList.add('error');
    }

}