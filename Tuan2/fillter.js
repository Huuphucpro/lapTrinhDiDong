Array.prototype.myFilter = function(callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}
var c = [1, 2, 3, 4, 5];
console.log(
    c.myFilter((num) => {
        return num > 2;
    })
);