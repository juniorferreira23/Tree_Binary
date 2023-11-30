class No {
    constructor(chave){
        this.raiz = chave
        this.esquerda = null
        this.direita = null
    }
}

const raiz = new No(1)
raiz.esquerda = new No(2)
raiz.direita = new No(3)
raiz.esquerda.esquerda = new No(4)
raiz.esquerda.direita = new No(5)
raiz.direita.esquerda = new No(6)
raiz.direita.esquerda.esquerda = new No(7)

const calcularProfundidade = (no) => {
    if (no === null) {
        console.log('Nó vázio');
    } else {
        // Recursivamente calcula a profundidade de cada subárvore
        const profundidadeEsquerda = calcularProfundidade(no.esquerda); //raiz.esquerda
        const profundidadeDireita = calcularProfundidade(no.direita);  //raiz.direita
    
        // A profundidade da árvore é a maior profundidade entre as subárvores mais a raiz
        console.log(Math.max(profundidadeEsquerda, profundidadeDireita) + 1)
    }
}

const busca = (no) => {
    if (no === null) {
        console.log('Nó vázio');
    } else {
        // Recursivamente calcula a profundidade de cada subárvore
        const profundidadeEsquerda = calcularProfundidade(no.esquerda); //raiz.esquerda
        if(no == 6){
            console.log('achei')
        }
        const profundidadeDireita = calcularProfundidade(no.direita);  //raiz.direita
        if(no == 6){
            console.log('achei')
        }
        // A profundidade da árvore é a maior profundidade entre as subárvores mais a raiz
        console.log(Math.max(profundidadeEsquerda, profundidadeDireita) + 1)
    }
}

calcularProfundidade(raiz)

