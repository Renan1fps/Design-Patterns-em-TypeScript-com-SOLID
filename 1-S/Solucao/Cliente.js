const EmailService = require("./EmailService");
const CpfService = require("./CpfService");

class Cliente {
  constructor(clienteID, nome, email, CPF) {
    this.clienteID = clienteID;
    this.nome = nome;
    this.email = email;
    this.CPF = CPF;
  }

  isValid() {
    return (
      new EmailService().isValid(this.email) &&
      new CpfService().isValid(this.CPF)
    );
  }
}

module.exports = Cliente;
