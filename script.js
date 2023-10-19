let sliderElement = document.querySelector("#slider");

let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");

let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let novaSenha = "";

//|PT| Obtendo a quantidade de caracteres do slider bar
//|EN| Getting the number of characters from the slider bar
sizePassword.innerHTML = sliderElement.value;
slider.oninput = function(){
    sizePassword.innerHTML = this.value;
} 

//|PT| Função para gerar de forma aleatória uma senha
//|EN| Function to randomly generate a password
function generatePassword(){
    
    //|PT| Obtenha todas os checkboxes no documento
    //|EN| Get all checkboxes in the document
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    //|PT|Inicialize uma array vazia para armazenar os valores dos checkboxes marcados
    //|EN| Initialize an empty array to store the values of checked checkboxes
    var checkedValues = [];

    //|PT| Percorra cada checkbox
    //|EN| Loop through each checkbox
    for (var i = 0; i < checkboxes.length; i++) {
    
        //|PT| Verifique se o checkbox atual está marcado
        //|EN| Check if the current checkbox is checked
        if (checkboxes[i].checked) {
            
            //|PT| Se o checkbox estiver marcado, 'empurre' seu valor para o array
            //|EN| If the checkbox is checked, push its value to the array
            checkedValues.push(checkboxes[i].value);
        }
    }

    //|PT| Junte todos os valores do array em uma única string 
    //|EN| Join all the values in the array into a single string
    var charset = checkedValues.join("");

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    //|PT| Remover a classe que esconde o resultado gerado ao clicar
    //|EN| Remove the class that hides the result generated when clicking
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

//|PT| Copiar senha gerada e informar se a cópia foi bem sucedida ou não
//|EN| Copy generated password and report whether the copy was successful or not
function copyPassword(){
    navigator.clipboard.writeText(novaSenha)
    .then(() => {
        alert("Senha copiada com sucesso!");
      })
    .catch(() => {
        alert("Algo deu errado!");
      })
}
