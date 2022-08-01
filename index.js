
let listpieces = ["piece1maisque100piece1maisque100piece1maisque100piece1maisque100piece1maisque100piece1maisque100piece1maisque100", "piece2", "p3"]

//Estutura lenght utilizada para obter o tamanho de uma string ou array
amount = listpieces.length

for (let i = 0; i < amount; i++) {
    let piece = listpieces[i];
    if (piece.length < 3) {
        console.log("ERRO! NOME DA PEÇA POSSUI MENOS DE 3 LETRAS");
    }
    if (piece.length <= 100) {
        console.log("Ok, peça cadastrada com sucesso!")
    }
    if (piece.length > 100) {
        console.log("ERRO! A quantidade deverá ser menor que 100")
    }
}

// -> O resultado que o código irá retornar é que a variável "pi3" é "ERRO! NOME DA PEÇA POSSUI
// MENOS DE 3 LETRAS"
// -> Caso a variável tenha mais que 100 letras (exemplo no piece1maisque100) o código irá retornar "ERRO! A quantidade deverá
// ser menor que 100"
// -> Caso o numero de letras para cadastro de peça fique dentro do parametro o código vai mostrar "Ok, peça cadastrada com sucesso!"