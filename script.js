let money = +prompt("Ваш бюджет на месяц?", "");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);
let expensesItem = prompt("Введите обязательную статью расходов в этом месяце", "");
console.log(expensesItem);
let expensesMoney = +prompt("Во сколько обойдется?", "");
console.log(expensesMoney);

let appData =  {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false,
};
appData.expenses.expensesItem = expensesMoney;


console.log(appData);
const oneDayBudget = money / 30;
console.log(oneDayBudget);
alert("Бюджет на 1 день" + oneDayBudget);