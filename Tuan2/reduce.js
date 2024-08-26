Array.prototype.myReduce = function(callback, init) {
    let accum = init;
    for (let i = 0; i < this.length; i++) {
        accum = callback(accum, this[i], i, this);
    }
    return accum;
};
var b = [1, 2, 3, 4];
console.log(
    b.myReduce((accum, curr) => {
        return accum + curr;
    }, 0)
);