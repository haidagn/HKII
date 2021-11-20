
// test @ 
const SignUpBtn = document.getElementById('btn-sign-up')
const inputPassBtn = document.getElementById('btn-input-pass')
const loadingBtn = document.getElementById('btn-loading')
const nextBtn = document.getElementById('btn-next')
const input = document.getElementById('email')
const emailZero = "admin@gmail.com"

input.addEventListener('keyup', (e) => {
    const valueInput = e.currentTarget.value;
    const check1 = valueInput.indexOf('@');
    const check2 = valueInput.indexOf('.');
    console.log(check1, check2);
    if (check1 > 0) {
        nextBtn.disabled = true;
        if (check2 > 0) {
            nextBtn.disabled = false;
        } else {
            nextBtn.disabled = true;
            return false;
        }
    } else {
        return false;
    }
})

nextBtn.addEventListener('click', (e) => {
    nextBtn.classList.add('d-none');
    loadingBtn.classList.remove('d-none');
    input.disabled = true;
    if (input.value === 'admin@gmail.com') {
        setTimeout(openIputPassBtn, 1000)
    } else {
        setTimeout(openSignUpBtn, 1000)
    }

})
function openIputPassBtn() {
    loadingBtn.classList.add('d-none')
    inputPassBtn.classList.remove('d-none')
}
function openSignUpBtn() {
    loadingBtn.classList.add('d-none')
    SignUpBtn.classList.remove('d-none')
}

// ================ đã có tài khoản ===================
const password = document.getElementById('password')
const backBtn = document.getElementById('btn-back')
const LogInBtn = document.getElementById('btn-log-in')
const LogInFalseBtn = document.getElementById('btn-log-in-false')
const forGetPass = document.getElementById('forget-pass')


inputPassBtn.addEventListener('click', (e) => {
    inputPassBtn.classList.add('d-none');
    input.classList.add('d-none');
    password.classList.remove('d-none');
    backBtn.classList.remove('d-none');
    forGetPass.classList.remove('d-none')
})

// check mật khẩu
password.addEventListener('keyup', (e) => {
    const passInput = e.currentTarget.value;
    let passinput = String(passInput);
    if (passinput.length > 6) {
        backBtn.classList.add('d-none');
        LogInBtn.classList.remove('d-none');
    } else {
        return false;
    }
})

LogInBtn.addEventListener('click', (e) => {
    LogInBtn.classList.add('d-none');
    loadingBtn.classList.remove('d-none');
    password.disabled = true;
    if (password.value === 'admin123') {
        setTimeout(correctPassword, 1000)
    } else {
        setTimeout(unCorrectPassword, 1000)
        setTimeout(disabledPass, 1000)
    }
})

function correctPassword() {
    location.replace("https://haidagn.github.io/HKIIskjdbakjsd-mnxcasdasdas/index-login.html")
}
function unCorrectPassword() {
    loadingBtn.classList.add('d-none');
    LogInFalseBtn.classList.remove('d-none');
    password.setAttribute("style", "border: 1px solid #FD8484;")
}
function disabledPass() {
    password.disabled = false;
}