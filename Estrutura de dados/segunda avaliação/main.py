import Arvore

opc = 0
arvore = Arvore.ArvoreBinaria()

while opc != 4:
    print("")
    print("## ÁRVORE BINÁRIA ##")
    print("1 - Inserir")
    print("2 - Remover")
    print("3 - Listar")
    print("4 - Sair")
    print("")
    opc = int(input("Informe a opção desejada: "))
    if opc == 1:
        # Implemente a lógica de inserção aqui
        print('')
        dado = int(input("Digite o valor a inserir: "))
        arvore.inserir(dado)
        print('')
    elif opc == 2:
        # Implemente a lógica de remoção aqui
        print('')
        dado = int(input("Digite o valor a remover: "))
        arvore.remover(dado)
        print('')
    elif opc == 3:
        lista = arvore.listar()
        print(lista)
    elif opc == 4:
        print("Sair")
    else:
        print("Opção inválida!")