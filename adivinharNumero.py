import random

numero = random.randint(1,10)
contador = 0

while True:
    chute = int(input("Adivinhe o número: "))

    if (chute == numero):
        contador = contador + 1
        print(f"Você acertou em {contador} tentativa(s).")
        break
    elif (chute > numero):
        print("Você errou! O número é menor")
        contador = contador + 1
    else:
        print ("Você errou! O número é maior")
        contador = contador + 1