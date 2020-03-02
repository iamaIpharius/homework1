let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    console.log(money);
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    console.log(time);

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData =  {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income : [],
    savings: true,
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        
        if (typeof(a)=== 'string' && typeof(a) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
           i--;
           console.log(i);
        }
    }
}
chooseExpenses();


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

function detectDayBudget () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("Бюджет на 1 день " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel () {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }
}
detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = 1,
        b = prompt("Статья необязательных расходов?", '');
        
        if (typeof(b)=== 'string' && typeof(b) != null && b != '' && b.length < 50) {
            console.log("done");
            appData.optionalExpenses[a] = b;
        } else {
           i--;
           a--;
           console.log(i);
           console.log(a);
        }
        a++;
    }
}
chooseOptExpenses();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();