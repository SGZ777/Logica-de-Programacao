const dados = {
  nome: "Ar",
  email: "arthur@email",
  senha: "12345",
};

function validarCadastro(dados) {
  const erros = {}
  let sucesso = true

  if (!dados.nome) {
    erros.nome = "Nome obrigatório"
    sucesso = false
  }

  if (dados.nome.length < 3) {
    erros.nome = "Nome deve ter pelo menos 3 caracteres"
    sucesso = false
  }

  if (!dados.email.includes("@") || !dados.email.includes(".")) {
    erros.email = "Email inexistente"
    sucesso = false
  }

  if (dados.senha.length < 8) {
    erros.senha = "A senha deve conter 8 ou mais caracteres"
    sucesso = false
  }

  if (!sucesso) {
    return erros
  }

  return dados
}

console.log(validarCadastro(dados))