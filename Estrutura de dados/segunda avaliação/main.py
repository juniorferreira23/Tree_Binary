import arvoreBinaria

class Prova2AVEstruturaDeDados:
    def __init__(self):
        self.opc = 0
        self.arvore = arvoreBinaria.ArvoreBinaria(7)

    def menu(self):
        print("")
        print("## ÁRVORE BINÁRIA ##")
        print("1 - Inserir")
        print("2 - Remover")
        print("3 - Listar")
        print("4 - Sair")
        print("")
        self.opc = int(input("Informe a opção desejada: "))

    def run(self):
        while self.opc != 4:
            self.menu()
            if self.opc == 1:
                self.inserir()
            elif self.opc == 2:
                self.remover()
            elif self.opc == 3:
                self.listar()
            elif self.opc == 4:
                print("Sair")
            else:
                print("Opção inválida!")

    def inserir(self):
        # Implemente a lógica de inserção aqui
        pass

    def remover(self):
        # Implemente a lógica de remoção aqui
        pass

    def listar(self):
        self.arvore.percursosSimetro()
        pass

if __name__ == "__main__":
    prova = Prova2AVEstruturaDeDados()
    prova.run()
