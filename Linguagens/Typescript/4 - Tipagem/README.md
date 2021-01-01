*** Inferência
O compilador irá inferir o valor de uma variavel pelo seu conteudo.

*** Tipos
- string
- number
- boolean
- array
- any
  
Uma variavel só tem seu tipo inferido na inicialização. No caso abaixo, o tipo da variavel myAge para o typescript será any.

``` 
let myAge;
myAge = 27;
``` 

Para isso, podemos definir o tipo da variável conforme abaixo:

``` 
let myAge: number;
myAge = 27;
``` 

Uma variavel pode ter mais de um tipo:

``` 
let item: number|string;
``` 

*** Tuplas
É um array de tipos de uma quantidade pré definida. 

let address: [string, number, number] = ['Nome', 1, 2];

*** Enums

enum Days {
    SUNDAY = 'SUNDAY',
    MONDAY = 'MONDAY'
}

Se cada valor do Enum nao for informado, será usado um indice numerico. Se informado, é usado via string.

*** Any
É o tipo em que a variavel fica igual ao JS. Pode ser qualquer tipo.

*** Funções
As funções retornam o tipo envolido.
É possivle envolver uma variavel do tipo funcoa.

let calc: (n1: number, n2: number) => number;

*** Objetos
let user = {
    nqme: 'Leonardo',
    age: 27,
}

let usuario: { nome: string, idade: number } = {
    nqme: 'Leonardo',
    age: 27,
}

const employee: { sups: string[], baterPonto: (hour: number) => number },

*** Union Types

let nota: number | string = 10;
let altura: null | number = 1.80; // strictNullChecks


*** Never
Usado quando a função nunca ira retornar: loop, erro.

function falha(msg: string): never {
    while(true) {}
    throw new Error(msg);
}

*** Type | Alias
type Funcionario = {
    nome: string,
    telefone: string,
}

*** Null
Uma variavel que aceita null só pode aceitar null.