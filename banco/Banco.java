package com.mycompany.banco;

public class Banco {

    public static void main(String[] args) {
        ContaBancaria conta1 = new ContaBancaria();
        ContaBancaria conta2 = new ContaBancaria(2, "Jao");
        
        conta2.depositar(18000);
        System.out.println("Conta 2");
        System.out.println("Numero: " + conta2.getNumero());
        System.out.println("Titular: " + conta2.getTitular());
        System.out.println("Saldo: R$" + conta2.getSaldo());
        System.out.println("===========================================");
        
        
    }
}
