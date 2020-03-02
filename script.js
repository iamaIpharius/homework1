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


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
    b = prompt("Во сколько обойдется?", '');
    
    if (typeof(a)=== 'string' && typeof(a) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
       i = 0;
       console.log(i);
    }
};
// let i--;
// while (i < 2) {
//     i++;
    
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
//             if (typeof(a)=== 'string' && typeof(a) != null && a != '' && b != '' && a.length < 10) {
//                 console.log("done");
//                 appData.expenses[a] = b;
//         } else {
//             i--;
//             console.log(i);
//         };
    
// };
// let i = 0;
// do {
    
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
        
//         console.log('i=' + i);
//     if (typeof(a)=== 'string' && typeof(a) != null && a != '' && b != '' && a.length < 10) {
//             console.log("done");
//             appData.expenses[a] = b;
//     } else {
//             i--;
//             console.log(i);
//     }
//     i++;

// }while(i < 2);

console.log(appData);
const oneDayBudget = appData.budget / 30;
console.log(oneDayBudget);
alert("Бюджет на 1 день " + oneDayBudget);

if (appData.moneyPerDay < 100) {
    console.log ("Это минимальный уровень достатка!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Это средний уровень достатка!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("Это высокий уровень достатка!");
} else {
    console.log ("Произошла ошибка");
}