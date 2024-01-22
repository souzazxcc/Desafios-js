// 1. Faça um programa que entre com três números, faça a média aritmética e mostre o resultado.

// const num1 = parseFloat(prompt("Digite um Numero :"))
// const num2 = parseFloat(prompt("Digite mais um Numero :"))
// const num3 = parseFloat(prompt("Digite outro Numero :"))
// console.log( num1  + num2 + num3)

// 2. Faça um programa que entre com o nome e o salário de um funcionário e mostre seu novo salário, sabendo que o mesmo teve um aumento de 10%.

// let funcionario = "Rodrigo Silva"
// let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário: R$"));
// let novoSalario = salarioAtual * 1.1;
// console.log(`O novo salário de ${funcionario} com o aumento de 10% é: R$${novoSalario.toFixed(2)}`);

// 3. Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais devem ser somado os dois, caso contrário multiplique A por B ao final do cálculo ao final do cálculo atribuir o valor para uma variável C.

// const A = parseInt(prompt("Digite o valor de A:"))
// const B = parseInt(prompt("Digite o valor de B:"))

// let C
// if (A === B) {
//     C = A + B
// } else {
//     C = A * B
// }

//console.log("O resultado final (C) é:", C)

// 4. A partir do preço à vista de um determinado produto, calcule o preço total a pagar e o valor da prestação mensal, referentes ao pagamento parcelado. Se o pagamento for parcelado em 3 vezes deve ser dado um acréscimo de 10% no total a ser pago. Se o parcelamento for em 5 vezes, o acréscimo será de 20%.

// const produtoValor = 847
// const pagamento = prompt(`O produto deu R$${produtoValor}, qual a forma de pagamento: `)

// if (pagamento === "parcelado") {
//     const parcelar = prompt("Parcelado em quantas vezes?")
    
//     if (parcelar === "3") {
//         console.log(`O valor total a pagar é de R$${produtoValor * 1.1}`)
//     } else if (parcelar === "5") {
//         console.log(`O valor total a pagar é de R$${produtoValor * 1.2}`)
//     } else {
//         console.log("Número de parcelas inválido.")
//     }
// } else if (pagamento === "vista") {
//     console.log(`O valor total é R$${produtoValor}`)
// } else {
//     console.log("Forma de pagamento inválida.")
// }

// 5. Faça um algoritmo que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual ou superior a 8.

// const notaMatematica  = parseFloat(prompt("Qual foi sua nota em matematica "))
// const notaIngles  = parseFloat(prompt("Qual foi sua nota em ingles: "))
// const notaportugues  = parseFloat(prompt("Qual foi sua nota em portugues: "))
// const notaTotal = notaMatematica + notaIngles + notaportugues / 3

// if ( notaTotal >= 8 ) {
//     console.log(`O aluno oi aprovado!`)
// } else {
//     console.log(`O aluno foi reprovado!`)
// }

// 6.  Escreva um algoritmo que receba dois números reais e um código de seleção do usuário. Se o código digitado for 1, faça o algoritmo adicionar os dois números previamente digitados e mostrar o resultado; se o código de seleção for 2, os números deverão ser multiplicados; se o código de seleção for 3, o primeiro número deve ser dividido pelo segundo.

// const num1 = parseFloat(prompt("Digite um numero: "))
// const num2 = parseFloat(prompt("Digite outro numero: "))
// const verificarUm = prompt("Para adcionar ambos digite 1, para multiplicar digite 2, para dividir digite 3")

// if (verificarUm === "1") {
//             console.log(num1 + num2)
//         } else if (verificarUm === "2") {
//             console.log(num1 * num2)
//         } else if (verificarUm === "3") {
//             console.log(num1 / num2)
// }