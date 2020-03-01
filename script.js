let money = +prompt("Ваш бюджет на месяц?", "");
console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log(time);


let appData =  {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: false,
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a2 = prompt("Во сколько обойдется?", ''),
	a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;


console.log(appData);
const oneDayBudget = money / 30;
console.log(oneDayBudget);
alert("Бюджет на 1 день" + oneDayBudget);