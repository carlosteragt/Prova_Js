function callback(mensagem){
    mensagem("Carlos")
}
callback(function(mensagem){
    console.log(`Mensagem: ${mensagem}`)
})