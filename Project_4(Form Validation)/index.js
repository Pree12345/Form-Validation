console.log("This is project 4");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

let ValidEmail = false;
let ValidPhone = false;
let ValidUser = false;
console.log(name, email, phone);

let success = document.getElementById('success');
success.style.display = "none";
let failure = document.getElementById('failure');
failure.style.display = "none";

name.addEventListener("blur", () => {
    console.log('name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        ValidUser = true;
    } else {
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        ValidUser = false;
    }
})

email.addEventListener("blur", () => {
    console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        ValidEmail = true;
    } else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        ValidEmail = false;
    }
})

phone.addEventListener("blur", () => {
    console.log('phone is blurred');
    // validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        ValidPhone = true;
    } else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        ValidPhone = false;
    }
})

let submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You are clicked');

    console.log(ValidEmail, ValidPhone, ValidUser);
    // submit form here

    if (ValidEmail && ValidPhone && ValidUser) {
        console.log("Phone,user and email are valid.Submitting the form.");
        let success = document.getElementById('success');
        success.classList.add('show');
        success.style.display = "block";
        let failure = document.getElementById('failure');
        failure.classList.remove('show');
        failure.style.display = "none";
    } else {
        console.log("One of phone,user or email are not valid.Hence, not submitting the form. Please correcct the errors and try again.")
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        failure.style.display = "block";
        let success = document.getElementById('success');
        success.classList.remove('show');
        success.style.display = "none";

    }
})