String.prototype.myCustomConcat = function (characters) {
    return `${this} my ${characters}`
};

const result = 'hello'.myCustomConcat('world')
console.log(result)

const result2 = 'I lost'.myCustomConcat('phone')
console.log(result2)