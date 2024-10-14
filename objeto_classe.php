<?php 

class Pessoa{
    private $nome;
    private $idade;

    public function __construct($nome, $idade){
        $this->nome = $nome;
        $this->idade = $idade;

    }

    public function getNome(){
        return $this->nome;
    }

    public function setNome($nome){
        $this->nome = $nome;
    }

    public function getIdade(){
        return $this->idade;
    }

    public function setIdade($idade){
        $this->idade = $idade;
    }
}

class Deficiente extends Pessoa{

}


$juan = new Pessoa('Juan', 18);

Pessoa->getNome();

echo 'Nome: ' . $juan->getNome();


$victor = new Pessoa('Victor', 19);

echo '\n\nNome: ' . $victor->getNome();

$resposta = $database->connect()

