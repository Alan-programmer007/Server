class apiConection{

    url = "http://localhost:3333/alunos"

    async listarAluno(){
    const response =  await fetch(this.url)
    
    const dados = await response.json()
    console.log(dados)
    
    return dados
    }
    
    async cadastraAluno(aluno) {
    const response =  await fetch(this.url, {
        method: "POST",
        body: JSON.stringify(aluno),
        headers: {"Content-Type": "application/json"}
    });
    
    }


    async deletarAluno(id) {
    const response =  await fetch(this.url + "/" +id, {
        method: "DELETE"
    });
        
    }
    
}


    const api = new apiConection()

    api.listarAluno()
    api.deletarAluno(3)
//  api.cadastraAluno(aluno)

