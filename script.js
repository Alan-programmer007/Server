import ApiConetion from "./api.js"

const api = new ApiConetion()

const button = document.querySelector("#entrada")

button.addEventListener('click', () => {

    const inputNome = querySelector("#input-nome")
    const inputEmail = querySelector("#input-email")

    const nome = inputNome.value
    const email = inputEmail.value

    const aluno = {
        nome,
        email
    }

    api.listarAluno(aluno)
})