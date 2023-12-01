# Para rodar o script deve possuir o NodeJS e executar o comando " node arvoreBinaria.js "

# Árvore binária é uma estrutura de dados assim como listas e pilhas que tem o objetivo de armazernar os dados,
# mas diferente das listas e pilhas que são estruturas lineares, a árvore possuem uma maneira mais sofisticada
# e hierarquica de armazenar dados.

# A estrutura base da árvore é a raiz que é a parte mais alta da árvore e possuem arestas
# Então iniciaremos criando uma class Nó que terá a raiz e as arestas 

class No:
    def __init__(self, chave):
        # Aqui podemos observar que ao ser instânciada a classe Nó iremos atribuir o valor do dado ao Nó
        self.chave = chave
        # Podemos observa que os nós filhos serão a esquerda e a direita e iniciaram vázios
        self.esquerda = None
        self.direita = None

# Ao instânciar a classe Nó atribuimos o valor do dado que irá ser a primeira raiz da classe

# const raiz = new No(1)

# Logo em seguida intânciamos novos nós no qual informamos que os atributos esquerda e direta serão Nós filhos
# Em caso de haver vários Nós nãos conectados são chamados de florestas.

# raiz.esquerda = new No(2)
# raiz.direita = new No(3)

# Observamos que o código abaixo demostra como cada ramificação tem seus atributos a esquerda e a direita,
# assim dando o nome desse modelo de estrutura de Árvore binária, pois só possui duas ramificações.

# raiz.esquerda.esquerda = new No(4)
# raiz.esquerda.direita = new No(5)
# raiz.direita.esquerda = new No(6)
# raiz.direita.esquerda.esquerda = new No(7)

# Por fim os últimos Nós e os mais profundos são chamados de folhas

# console.log(raiz)


# Exemplificação de vamos das chaves sendo "v" o ponteiro para baixo informado que Nó a esquerda ou a direita
#               1               1º Camada de profundidade
#          /         \
#         2          3          2º Camada de profundidade
#        / \        / \
#      4   5       6            3º Camada de profundidade
#     /\   /\     /\
#           7                   4º Camada de profundidade

# Evoluindo nosso código podemos separar a classe nó e a classe árvore binária que irá possuir o atributo raiz e instaciamos ela.

class ArvoreBinaria:
    def __init__(self):
        self.raiz = None

    def inserir(self, chave):
        self.raiz = self._inserir(self.raiz, chave)

    def _inserir(self, no, chave):
        if no is None:
            return No(chave)
        
        if chave < no.chave:
            no.esquerda = self._inserir(no.esquerda, chave)
        elif chave > no.chave:
            no.direita = self._inserir(no.direita, chave)

        return no

    def remover(self, chave):
        self.raiz = self._remover(self.raiz, chave)

    def _remover(self, no, chave):
        if no is None:
            return no

        if chave < no.chave:
            no.esquerda = self._remover(no.esquerda, chave)
        elif chave > no.chave:
            no.direita = self._remover(no.direita, chave)
        else:
            # No com um ou nenhum filho
            if no.esquerda is None:
                return no.direita
            elif no.direita is None:
                return no.esquerda

            # No com dois filhos: encontrar o sucessor in-order
            no.chave = self._minimo_valor(no.direita)

            # Remover o sucessor in-order
            no.direita = self._remover(no.direita, no.chave)

        return no

    def _minimo_valor(self, no):
        while no.esquerda is not None:
            no = no.esquerda
        return no.chave

    def listar(self):
        return self._listar(self.raiz)

    def _listar(self, no):
        if no is not None:
            return {
                'raiz': no.chave,
                'esquerda': self._listar(no.esquerda),
                'direita': self._listar(no.direita)
            }
        else:
            return {}

