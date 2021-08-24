console.log("Cadastro Evento Back End")
var evento= " PALESTRA BACK END"
var datahj="26.08.2021"
var dataevento = "25.08.2021"
if(dataevento<datahj){
    console.log(" Data inválida. Favor informar uma data posterior ao dia atual")
}
var participantes = ["Filipe","Elisa","Amanda"]
console.log(participantes)
var NumeroDeInscritos=participantes.length
if(NumeroDeInscritos<100){
    console.log("Nome do novo participante:")
    console.log("Digite a idade do participante: ")
}
else{
    console.log("Limite de participante excedida")
}
var idade=18
if(idade>18){
    console.log("Cadastro efetuado")
}
else{
    console.log("Idade do participante inferior ao permitido.")
}
var palestrantes=["Thiago","Ordilei","Roni"]
console.log("Os participantes serão",participantes)
console.log("Os palestrantes serão",palestrantes)