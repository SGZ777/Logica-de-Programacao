class Livro{
  constructor(id, titulo, autor, disponibilidade){
    this.id = id
    this.titulo = titulo
    this.autor = autor
    this.disponibilidade = disponibilidade
  }
}

class Biblioteca{
  constructor(){
    this.livros = [];
  }

    adicionarLivro(livro){
      this.livros.push(livro)
    }

    listarLivros(){
      return this.livros;
    }

    listarLivrosDisponiveis(){
        return this.livros.filter(livro => livro.disponibilidade);
    }       

    buscarLivro(id){
      return this.livros.find(livro => livro.id === id);
    }

}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro(new Livro(1, "Noites Brancas", "Fiódor Dostoiévsk", true));
biblioteca.adicionarLivro(new Livro(2, "1984", "George Orwell", false));
biblioteca.adicionarLivro(new Livro(3, "A Metamorfose", "Franz Kafka", true));
console.log(biblioteca.listarLivros());
console.log(biblioteca.listarLivrosDisponiveis())
console.log(biblioteca.buscarLivro(1))