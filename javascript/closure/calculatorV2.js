function Calculator() {
    this.result = 0,
        this.getResult = function(){
            return this.result;
        },
        this.reset = function(){
            this.result = 0;
            return this;
        },
        this.add = function (a) {
            this.result += a;
            return this;
        },
        this.sub = function (a) {
            this.result -= a;
            return this;
        },
        this.mult = function (a) {
            this.result *= a;
            return this;
        },
        this.div = function (a) {
            this.result /= a;
            return this;
        }
}

let calculator = new Calculator();

console.log(calculator.getResult());
console.log(calculator.add(3).mult(2).getResult());
console.log(calculator.sub(4).div(2).getResult());
console.log(calculator.reset().getResult());