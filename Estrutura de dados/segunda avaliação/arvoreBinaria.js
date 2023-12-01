// Para rodar o script deve possuir o NodeJS e executar o comando " node arvoreBinaria.js "

// Árvore binária é uma estrutura de dados assim como listas e pilhas que tem o objetivo de armazernar os dados,
// mas diferente das listas e pilhas que são estruturas lineares, a árvore possuem uma maneira mais sofisticada
// e hierarquica de armazenar dados.

// A estrutura base da árvore é a raiz que é a parte mais alta da árvore e possuem arestas
// Então iniciaremos criando uma class Nó que terá a raiz e as arestas 

class No {
    constructor(dado){
        // Aqui podemos observar que ao ser instânciada a classe Nó iremos atribuir o valor do dado ao Nó
        this.dado = dado
        // Podemos observa que os nós filhos serão a esquerda e a direita e iniciaram vázios
        this.esquerda = null
        this.direita = null
    }
}

// Ao instânciar a classe Nó atribuimos o valor do dado que irá ser a primeira raiz da classe

// const raiz = new No(1)

// Logo em seguida intânciamos novos nós no qual informamos que os atributos esquerda e direta serão Nós filhos
// Em caso de haver vários Nós nãos conectados são chamados de florestas.

// raiz.esquerda = new No(2)
// raiz.direita = new No(3)

// Observamos que o código abaixo demostra como cada ramificação tem seus atributos a esquerda e a direita,
// assim dando o nome desse modelo de estrutura de Árvore binária, pois só possui duas ramificações.

// raiz.esquerda.esquerda = new No(4)
// raiz.esquerda.direita = new No(5)
// raiz.direita.esquerda = new No(6)
// raiz.direita.esquerda.esquerda = new No(7)

// Por fim os últimos Nós e os mais profundos são chamados de folhas

//console.log(raiz)


//Exemplificação de vamos das chaves sendo "v" o ponteiro para baixo informado que Nó a esquerda ou a direita
//               1               1º Camada de profundidade
//          /         \
//         2          3          2º Camada de profundidade
//        / \        / \
//      4   5       6            3º Camada de profundidade
//     /\   /\     /\
//           7                   4º Camada de profundidade

// Evoluindo nosso código podemos separar a classe nó e a classe árvore binária que irá possuir o atributo raiz e instaciamos ela.
class ArvoreBinaria {
    constructor(data){
        let no = new No(data)
        this.raiz  = no
    }
}

const arvore = new ArvoreBinaria(7)
arvore.esquerda = new No(18)
arvore.direita = new No(14)

console.log(arvore.raiz)
console.log(arvore.esquerda)
console.log(arvore.direita)