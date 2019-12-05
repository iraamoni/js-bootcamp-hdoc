// tutorial (video: 031 Build an Expense Tracker)
    //none 

    
    
    
    
    
// challenge (video: 031 Build an Expense Tracker)  
 

let myAccount = {
    name: 'Suborna',
    income: 0,
    expense: 0, 
}

    let addExpense = function (account, amount) {
        account.expense = account.expense + amount
    }

    let addIncome = function (account, income) {
        account.income = account.income + income
    }

    let resetAccount = function (account) {
        account.income = 0;
        account.expense = 0;
    }

    let getAccountSummery = function (account) {
        let balance = account.income - account.expense
        return `Account for ${account.name} has $${balance} $${account.income} in income. $${account.expense} in expense`
    } 

    addIncome(myAccount, 2000)
    addExpense (myAccount, 2.50)
    addExpense(myAccount, 160)
    console.log(getAccountSummery(myAccount))

    resetAccount(myAccount)
    console.log(getAccountSummery(myAccount))




    