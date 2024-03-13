let pessoa = ({
    nome: "Carlos",
    nascimento: 24/01/2004,
    cpf: 12345678910
})
let aluno = ({
    nome: "Carlos",
    nascimento: "24/01/2004",
    cpf: 12345678910,
    matricula: 987654321,
    notas: (10,5,7,8),
    media: 0
})
function media(aluno){
    for(i = 0; i < aluno.notas.length; i++){
        aluno.media += aluno.notas
    }
    return (aluno.media / aluno.notas.length)
}






console.log(pessoa)
console.log(aluno)
console.log(media(aluno))
console.log(aluno.media)