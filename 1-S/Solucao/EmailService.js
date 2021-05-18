
class EmailService {
  isValid(email) {
    if (email==undefined) {
      return false;
    }
    return true;
  }
}

module.exports = EmailService;
