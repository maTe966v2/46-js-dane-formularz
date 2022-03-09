let nameInput = document.getElementById("fname-input");
let surnameInput = document.getElementById("sname-input");
let phoneInput = document.getElementById("phone-input");
let name = document.getElementById("name");
let surname = document.getElementById("surname");
let phone = document.getElementById("phone");

let button = document.querySelector("button");

button.addEventListener("click", () => {
    name.innerText = nameInput.value;
    surname.innerText = surnameInput.value;
    phone.innerText = phoneInput.value;
});
