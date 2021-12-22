class User {
    constructor(userName, emailAddress) {
        this.name = userName
        this.email = emailAddress
        this.accountBalance = 0;
    }

    makeDeposit(amt) {
        this.accountBalance += amt;
        return this;
    }

    makeWithdrawal(amt) {
        this.accountBalance -= amt;
        return this;
    }

    displayBalance() {
        console.log(`${this.name}'s account balance is :`+ " $"+ `${this.accountBalance}`);
        return this;
    }

    transferMoney(user, amt) {
        this.accountBalance -= amt;
        user.accountBalance += amt;
        return this;
    }


}

const chris = new User("Chris Morton", "chris.morton.chris@gmail.com");
const misty = new User("Misty Morton", "marowe0000@gmail.com");
const jiraiya = new User("Jiraiya Morton", "jmorton@gmail.com");
chris.makeDeposit(100).makeDeposit(50).makeDeposit(45).makeWithdrawal(23).displayBalance()
misty.displayBalance();
chris.transferMoney(misty, 35);
misty.displayBalance();
chris.displayBalance();
misty.makeDeposit(75).makeDeposit(45).makeDeposit(90).makeWithdrawal(34).makeWithdrawal(23).displayBalance()
jiraiya.makeDeposit(5000).makeWithdrawal(34).makeWithdrawal(90).makeWithdrawal(78).displayBalance()
chris.transferMoney(jiraiya, 89).displayBalance();
jiraiya.displayBalance();

