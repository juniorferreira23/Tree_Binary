class No:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None

# Exemplo de uma árvore binária
root = Node(1)
root.left = Node(2)
root.right = Node(3)
root.left.left = Node(4)
root.left.right = Node(5)

print(root)