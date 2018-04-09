import { LogCall } from './method_decorator'

class SimpleCalc {
    @LogCall("My own prefix")
    sum(a:number, b:number) {
        return a+b;
    }
}

let calc = new SimpleCalc();
console.log(calc.sum(1,2));
