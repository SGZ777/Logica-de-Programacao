package com.mycompany.banco;


public class ContaBancaria {
    private int numero;
    private String titular;
    private double saldo;
    
    public ContaBancaria(){
        this.saldo = 0;
    }
        
    public ContaBancaria(int numero, String titular){
        this.numero = numero;
        this.titular = titular;
        this.saldo = 0;
       
}
    public void setNumero(int numero){
       this.numero = numero;
    }

    public int getNumero(){
        return numero;
    }
    
      public void setTitular(String titular){
       this.titular = titular;
    }

    public String getTitular(){
        return titular;
    }
    
    public double getSaldo(){
        return saldo;
    }

    public void depositar(double valor){
        if (valor > 0){
           this.saldo += valor; 
            System.out.println("Deposito realizado com sucesso.");
        }
    }
    
    public void sacar(double valor){
        if (valor <= this.saldo && valor > 0){
           this.saldo -= valor; 
            System.out.println("Saque realizado com sucesso.");
        }
    }
    
    }