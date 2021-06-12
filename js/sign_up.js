const form = document.getElementById('form');
const username = document.getElementById('username');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input,message) {
    const formControl = input;
    formControl.className = 'form-control error';
    const porcello = input.parentElement;
    const small = porcello.querySelector('small');
    small.innerText = message;
    small.className = 'color-red';
}

function showSuccess(input,html) {
    const formControl = input;
    formControl.className = 'form-control success';
    const porcello = input.parentElement;
    const small = porcello.querySelector('small');
    small.innerHTML = html;
    small.className = 'color-green';
}


function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${input.name} 尚未填寫`);
        } else {
            showSuccess(input,`<i class="fas fa-check"></i>`);
        }
    });
}

function checkPasswordsMatch(input1,input2) {
    if(input1.value !== input2.value) {
        showError(input2,'密碼不一致') & showError(input1,'');
    } else {
        showSuccess(input1,`<i class="fas fa-check"></i>`) & showSuccess(input2,`<i class="fas fa-check"></i>`)
    }

}

username.addEventListener("keyup", function(e) {
    e.preventDefault();
    
    checkRequired([username]);
});

nickname.addEventListener("keyup", function(e) {
    e.preventDefault();
    
    checkRequired([nickname]);
});

email.addEventListener("keyup", function(e) {
    e.preventDefault();
    
    checkRequired([email]);
});


password2.addEventListener("keyup", function(e) {
    e.preventDefault();

    checkPasswordsMatch(password, password2);
});