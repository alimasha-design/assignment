

// kilometerToMeter

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(5);
console.log(result);




// budgetCalculator

function budgetCalculator (watch, phone, laptop) {
    var watchBudget = watch * 50;
    var phoneBudget = phone * 100;
    var laptopBudget = laptop * 500;
    budgetTotal = watchBudget + phoneBudget + laptopBudget;

    return budgetTotal;

}

var result = budgetCalculator(10, 5, 2);
console.log(result);




// hotelCost

function hoetelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }

    else if (day <= 20) {
        var firstDays = 10 * 100;
        var remaining = day - 10;
        var secondDays = remaining * 80;
        cost = firstDays + secondDays;
    }

    else {
        var firstDays = 10 * 100;
        var secondDays = 10 * 80;
        var remaining = day - 20;
        var thirdDays = remaining * 50;
        cost = firstDays + secondDays + thirdDays;
    }
    return cost;
}

var result = hoetelCost(35);
console.log(result);




