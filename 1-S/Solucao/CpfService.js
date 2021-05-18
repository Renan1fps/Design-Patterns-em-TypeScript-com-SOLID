class CpfService {
  isValid(cpf) {
    if (cpf==undefined) {
      return false;
    }
    return true;
  }
}
module.exports = CpfService;
