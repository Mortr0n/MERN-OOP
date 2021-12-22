class BankAccount {
    constructor( intRate=1, balance=0 ) {
        this.intRate = intRate * .01;
        this.balance = balance;
    }

    deposit(amt) {
        this.balance += amt;
        return this;
    }

    withdraw(amt) {
        this.balance -= amt;
        return this;
    }

    displayAccountInfo() {
        console.log(`Balance : ${this.balance}`);
        return this;
    }

    yieldInterest() {
        if(this.balance>0) {
            this.balance += (this.balance *= this.intRate);
        }
        return this;
    }

}

const act = new BankAccount(1, 500);
const newAct = new BankAccount(5, 1000);
act.deposit(90).deposit(9).deposit(99).withdraw(9).yieldInterest().displayAccountInfo();
newAct.deposit(9000).deposit(78987).withdraw(786).withdraw(7384).withdraw(34).withdraw(89).yieldInterest().displayAccountInfo();