class User {
    constructor(userName, emailAddress) {
        this.name = userName
        this.email = emailAddress
        this.accountBalance = 0;
    }

    makeDeposit(amt) {
        this.accountBalance += amt;
    }

    makeWithdrawal(amt) {
        this.accountBalance -= amt;
    }

    displayBalance() {
        console.log(`${this.name}'s account balance is :`+ " $"+ `${this.accountBalance}`);
    }

    transferMoney(user, amt) {
        this.accountBalance -= amt;
        user.accountBalance += amt;
    }


}

const chris = new User("Chris Morton", "chris.morton.chris@gmail.com");
const misty = new User("Misty Morton", "marowe0000@gmail.com");
const jiraiya = new User("Jiraiya Morton", "jmorton@gmail.com");
chris.makeDeposit(100);
chris.makeDeposit(50);
chris.makeDeposit(45);
chris.makeWithdrawal(23);
chris.displayBalance();
misty.displayBalance();
chris.transferMoney(misty, 35);
misty.displayBalance();
chris.displayBalance();
misty.makeDeposit(75);
misty.makeDeposit(45);
misty.makeDeposit(90);
misty.makeWithdrawal(34);
misty.makeWithdrawal(23);
misty.displayBalance();
jiraiya.makeDeposit(5000);
jiraiya.makeWithdrawal(34);
jiraiya.makeWithdrawal(90);
jiraiya.makeWithdrawal(78);
jiraiya.displayBalance();
chris.transferMoney(jiraiya, 89);
chris.displayBalance();
jiraiya.displayBalance();

