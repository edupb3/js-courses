const { utimes } = require("fs");
const EntityBase = require("./entityBase");
const entityBase = require("./entityBase");
const Util = require("./util");

class Employee extends EntityBase{
    static TAXES_PERCENT = 0.2;
    #grossPay = 5000.65;

    get grossPay(){
        return Util.formatCurrency(this.#grossPay);
    }

    get netPay(){        
        let result = (this.#grossPay - (this.#grossPay * Employee.TAXES_PERCENT)).toFixed(2)
        return Util.formatCurrency(result)
    }

}
module.exports = Employee;