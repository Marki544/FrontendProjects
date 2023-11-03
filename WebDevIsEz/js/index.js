const input = document.getElementById('input-field');
const btn = document.getElementById('button');
const errorSign = document.getElementById('error-sign');
const errorText = document.getElementById('error-text');

btn.addEventListener('click', function(){
    let inputValue = input.value;

    if(inputValue.includes('@') && inputValue.includes('.')){
        errorSign.style.display = "none";
        errorText.style.display = "none";
        input.style.border = "1px solid #ce9797";
    }else{
        errorSign.style.display = "block";
        errorText.style.display = "block";
        input.style.border = "2px solid #f96262";
    }
});