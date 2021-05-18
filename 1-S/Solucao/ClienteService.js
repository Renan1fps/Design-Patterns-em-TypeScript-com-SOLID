const repositorio = require("./ClienteRepository").default;
const Cliente = require("./Cliente");

class ClienteService {

  adicionarCliente(Cliente) {
    if (!Cliente.isValid()) {
      return "dados inválidos";
    }
    var repo = new repositorio();

    repo.AdicionarCliente(Cliente);
  }
}
