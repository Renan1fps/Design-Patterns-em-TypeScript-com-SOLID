/*Nesse Arquivo mostrarei o problema */

class Cliente {
  constructor(clienteID, nome, email, CPF) {
    this.clienteID = clienteID;
    this.nome = nome;
    this.email = email;
    this.CPF = CPF;
  }

  adicionarCliente() {
    if (this.email.length() == 0) {
      return "Email inválido!";
    }
    if (this.CPF.length() != 11) {
      return "CPF iválido!";
    }

    //banco de dados falso
    const dataBase = function (Cliente) {
      const conectionDb = [];
      conectionDb.push(Cliente)
    };
    const enviaEmail=()=>{
        console.log("Enviando email.")
    }
  }
}

/*Essa classe está com varias responsabilidades, tais como adicionar cleinte, fazer verificação, conectar ao banco de dados e  enviar emails, isso poderia ser resolvido dividindo responsabilidades1 */