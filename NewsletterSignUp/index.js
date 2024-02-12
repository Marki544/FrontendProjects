const input = document.getElementById('input');
const subscribeBtn = document.getElementById('subscribe-btn');
const errorText = document.getElementById('error');

subscribeBtn.addEventListener('click', function() { 
    if(!input.value.includes('@') && !input.value.includes('.')){
        errorText.classList.add('active');
        errorText.classList.remove('inactive');
    }else{
        errorText.classList.remove('active');
        errorText.classList.add('inactive');
    }
});