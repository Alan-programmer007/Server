import Apiconetion from "./api.js"

const api = new Apiconetion()

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
