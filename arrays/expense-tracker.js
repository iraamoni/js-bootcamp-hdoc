// Challenge (video: 046 Improve Our Expense Tracker)

    //Challenge 1 & 2

        const account = {
            name: 'Suborna Jahan',
            income: [],
            addIncome: function(description, amount) {
                this.income.push({
                    description: description,
                    amount: amount
                })
            },
            expenses: [],
            addExpenses: function(description, amount) {
                this.expenses.push({
                    description: description,
                    amount: amount
                })
            },
            getAccountSummery: function() {
                let totalExpense = 0
                let totalIncome = 0
                let accountBalance = 0
                this.expenses.forEach(function (moneySpent) {
                    totalExpense = moneySpent.amount + totalExpense;
                })
                this.income.forEach(function(moneyEarned) {
                    totalIncome = moneyEarned.amount + totalIncome
                })

                accountBalance = totalIncome - totalExpense             
                return `${this.name} has £${accountBalance} money left`
            },
        }

        account.addIncome('job', 3000)
        account.addExpenses('rent', 500)
        account.addExpenses(' TV', 50)
        console.log(account.getAccountSummery())
