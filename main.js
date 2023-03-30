//-------Atividade Array
// 1. Faça um programa, seguindo os passos:
    
//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`
    
//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
// c) Imprima o array no console
    
//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
//e) Remova da lista o item de índice que o usuário escolheu.
    
//f) Imprima o array no console


// -------Atividade-----

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).



// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b

//-------------------------------------------------------------------------------------

//a) Crie um array vazio e guarde-o em uma variável, chamada `tarefas`

var tarefas = []    


//b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

const pedir = prompt('me diga uma tarefa que voce precise fazer hoje:')

tarefas.push(pedir)
console.log(tarefas)

const pedir2 = prompt('me diga outra tarefa que voce precise fazer hoje:')

tarefas.push(pedir2)
console.log(tarefas)

const pedir3 = prompt('agora outra:')

tarefas.push(pedir3)
console.log(tarefas)

//c) Imprima o array no console

console.log(tarefas)

//d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

const perguntar = prompt('digite o indice de uma tarefa que voce ja realizou:')

console.log(tarefas[perguntar-1])

//e) Remova da lista o item de índice que o usuário escolheu.

tarefas.splice(perguntar)

    
//f) Imprima o array no console

console.log(tarefas)

//-----------------------------------------------

// A) Escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome, a idade, endereço e uma profissão. Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem.

// Exemplo: Eu sou (nome), tenho (idade) anos, moro em (endereço) e sou (profissão).


function fraseNome(nome, idade, endereco, profissao){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
}

const dados = prompt("escreva o seu nome")
const dados1 = prompt("escreva o sua idade")
const dados2 = prompt("escreva o sua cidade")
const dados3 = prompt("escreva o seu profissao")


fraseNome(dados, dados1, dados2, dados3)

// B) Escreva uma função que receba 2 números como parâmentros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

const var1 = parseInt(prompt('Digite um numero'))
const var2  = parseInt(prompt('Digite outro numero'))

const soma = (var1 + var2)

alert(`seu resultado é ${soma}`)

// C) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function TorF(n1, n2){
    if(n1 > n2){
       return `seu primeiro numero é maior que o segundo` }
    else if(n1 === n2){
       return `seu primeiro numero é igual ao segundo`
    }
    else {}
    
}

const user1 = prompt("digite um valor:")
const user2 = prompt("digite outro valor:")

console.log(TorF(user1, user2));

    

// D) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function paresimpares(num1){
    if( num1%2 === 0){
       return `é par bixo` }
    else {
        return `não é par bixao`
    }
    
}

const usuario1 = prompt("digite um valor:")

console.log(paresimpares(usuario1));

// E) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


const mensagem = prompt("so vai")

console.log(mensagem.length)
console.log(mensagem.toUpperCase())

//Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento.b



    function SOMA(numero1, numero2){
       const soma = (numero1 + numero2) 

       return soma
    
    }


    function SUBTRACAO(numero1, numero2){
        const subtracao = (numero1 - numero2) 
 
        return subtracao
     
     }


     function MULTIPLICACAO(numero1, numero2){
        const multiplicacao = (numero1 * numero2) 
 
        return multiplicacao
     
     }


     function DIVISAO(numero1, numero2){
        const divisao = (numero1 / numero2) 
 
        return divisao
     
     }

     
     const pessoa1 = parseInt(prompt("digite um valor:")) 
     const pessoa2 = parseInt(prompt("digite o segundo valor:"))
     console.log(SOMA(pessoa1, pessoa2));
     console.log(SUBTRACAO(pessoa1, pessoa2));
     console.log(MULTIPLICACAO(pessoa1, pessoa2));
     console.log(DIVISAO(pessoa1, pessoa2));

    


