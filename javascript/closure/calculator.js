/*this.add = a => {
            this.result += a;
            return (b => this.result += b);
        },*/
/*this.add = function(a) {
    this.result += a;
    return this.add.bind(this);
},*/
/*this.add = function (a) {
    this.result += a;
    return (function (b){
        return this.result += b;
    }).bind(this);
},*/
/*this.add = function (a) {
    this.result += a;
    return this.add;
}.bind(this),*/

function Calculator() {
    this.result = 0,
        this.getResult = () => this.result,
        this.reset = () => this.result = 0,
        this.add = function (a) {
            this.result += a;
            return this.add.bind(this);
        },
        this.sub = function (a) {
            this.result -= a;
            return this.add.bind(this);
        },
        this.mult = function (a) {
            this.result *= a;
            return this.add.bind(this);
        },
        this.div = function (a) {
            this.result /= a;
            return this.add.bind(this);
        }
}

let calculator = new Calculator();

console.log(calculator.getResult());
calculator.add(3)(2);
console.log(calculator.getResult());
calculator.add(2);
console.log(calculator.getResult());
calculator.reset();
console.log(calculator.getResult());



