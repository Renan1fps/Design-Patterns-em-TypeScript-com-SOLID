class DebitoConta {
  Debitar(valor, conta, tipoconta) {
    if (tipoconta == corrente) {
      //lógica de conta corrente
    }
    if (tipoconta == poupanca) {
      //lógica de poupança
    }
  }
}

export default DebitoConta;
/*Temos o seguinte problema: Caso surja um novo tipo de conta, o que eu faria? mais um if? Não seria o ideal porque estaria ferindo o principio OCP que é: Uma classe deve estar fechada para mudanças e aberta para extenção. */
