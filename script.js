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


// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     b = prompt("Во сколько обойдется?", '');
    
//     if (typeof(a)=== 'string' && typeof(a) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//        i = 0;
//        console.log(i);
//     }
// };
// let i = 0;
// while (i < 2) {
//     i++;
    
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
//             if (typeof(a)=== 'string' && typeof(a) != null && a != '' && b != '' && a.length < 10) {
//                 console.log("done");
//                 appData.expenses[a] = b;
//         } else {
//             i = 0;
//             console.log(i);
//         };
    
// };
let i = 0;
do {
    
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        i++;
        console.log('i=' + i);
    if (typeof(a)=== 'string' && typeof(a) != null && a != '' && b != '' && a.length < 10) {
            console.log("done");
            appData.expenses[a] = b;
    } else {
            i = 0;
            console.log(i);
    };
     

}while(i < 2);

console.log(appData);
const oneDayBudget = appData.budget / 30;
console.log(oneDayBudget);
alert("Бюджет на 1 день " + oneDayBudget);