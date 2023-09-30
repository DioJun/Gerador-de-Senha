let sliderElement = document.querySelector("#slider");

let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_=";
/*
Implementar a lógica do check-box 


let minuscula = "abcdefghijklmnopqrstuvwxyz";
let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeros = "0123456789";
let especiais = ".-_=";



function check() {
    let options = document.querySelector("#minuscula : checked")

}
*/

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
} 

function generatePassword(){
    
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha)
    .then(() => {
        alert("Senha copiada com sucesso!");
      })
    .catch(() => {
        alert("Algo deu errado!");
      })
}
