import { CreditCard } from "./CreditCard";
import { DebitCard } from "./DebitCard";
import { NubankRewards } from "./NubankRewards";

// const card = new CreditCard();
//const card = new DebitCard();
const card = new NubankRewards()

card.validate();
card.collectPayment();


/*As tres classes que eram filhas de minha interface conseguiram realizar  a "validação e pagamento" sem quebrar o código. A idéia era,
ter uma classe de pagamento que era essa index.ts onde eu realizava pagamento por meio de credito e debito, e depois chegou o pagamento por rewards e ela também conseguiu realizar esse pagemento, substituindo a classe pai. */