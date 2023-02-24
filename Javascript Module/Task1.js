function add(number) {
    function sum(nextNumber) {
        number += nextNumber;
        return sum;
    }
    sum.toString = function () {
        return number;
    }
    return sum;
}

console.log(add(1)(2));