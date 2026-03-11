n1 = float(input("Digite a primeira nota: "))
n2 = float(input("Digite a segunda nota: "))
n3 = float(input("Digite a terceira nota: "))

media = round((n1 + n2 + n3) / 3)

if media < 5:
    print("Reprovado")

elif media >= 5 and media < 7:
    print("Recuperação")

else:
    print("Aprovado")

print(f"Média: {media}")
