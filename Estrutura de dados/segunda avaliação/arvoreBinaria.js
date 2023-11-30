// Para rodar o script deve possuir o NodeJS e executar o comando " node arvoreBinaria.js "

// Árvore binária é uma estrutura de dados assim como listas e pilhas que tem o objetivo de armazernar os dados,
// mas diferente das listas e pilhas que são estruturas lineares, a árvore possuem uma maneira mais sofisticada
// e hierarquica de armazenar dados.

// A estrutura base da árvore é a raiz que é a parte mais alta da árvore e possuem arestas ou nós
// Então iniciaremos criando uma class Nó que terá a raiz e as arestas 
class No {
    constructor(chave){
        // Aqui podemos observar que ao ser instânciada a classe Nó iremos atribuir o valor da chave a raiz
        this.chave = chave
        // Podemos observa que os nós filhos serão a esquerda e a direita e iniciaram vázios
        this.esquerda = null
        this.direita = null
    }
}

// Ao instânciar a classe Nó atribuimos o valor da chave que irá ser a primeira raiz da classe
const raiz = new No(1)
// Logo em seguida intânciamos novos nós no qual informamos que além dos atributos esquerda e direta serem
// Nós filhos eles são também raizes se suas próprias mini-árvores ou Nós pai de seus nós filhos, no qual se tivermos várias ramificações
// passamos a ter o que é chamado de floresta, no qual seria vários nós com suas respectivas "raizes".
raiz.esquerda = new No(2)
raiz.direita = new No(3)
// Observamos que o código abaixo demostra como cada ramificação tem seus atributos a esquerda e a direita,
// assim dando o nome desse modelo de estrutura de Árvore binária, pois só possui duas ramificações.
raiz.esquerda.esquerda = new No(4)
raiz.esquerda.direita = new No(5)
raiz.direita.esquerda = new No(6)
raiz.direita.esquerda.esquerda = new No(7)
// Por fim os últimos Nós e os mais profundos são chamados de folhas
console.log(raiz)
console.log(raiz.direita.esquerda.esquerda) // Nó mais profundo

//      1
//     2 3
// 4 5     6
//      7