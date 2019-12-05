// tutorial (video: 030 Object References)

let myAccount = {
    name: 'Suborna',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses =  account.expenses + amount
}

addExpense(myAccount, 10)
console.log(myAccount)



 
// challenge (video: 030 Object References)
    // none