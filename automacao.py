# Automação com Python
import pyautogui
from time import sleep

pyautogui.click(966,595,duration=0.01)

pyautogui.click(953,541,duration=0.01)
pyautogui.write('ARTHUR')
pyautogui.click(950,566,duration=0.01)
pyautogui.write('123')

pyautogui.click(915,592,duration=0.01)

pyautogui.click(953,541,duration=0.01)
pyautogui.write('ARTHUR')
pyautogui.click(950,566,duration=0.01)
pyautogui.write('123')

pyautogui.click(869,596,duration=0.01)

with open('produtos.txt','r') as arquivo:
    for linha in arquivo:
        produto=linha.split(',')[0]
        quantidade=linha.split(',')[1]
        preco=linha.split(',')[2]

        pyautogui.click(707,526,duration=0.01)
        pyautogui.write(produto)
        pyautogui.click(705,552,duration=0.01)
        pyautogui.write(quantidade)
        pyautogui.click(710,580,duration=0.01)
        pyautogui.write(preco)
        pyautogui.click(593,739,duration=0.01)