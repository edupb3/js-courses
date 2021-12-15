const EntityBase = require("./entityBase");
const entityBase = require("./entityBase");
const Util = require("./util");

class Employee extends EntityBase{
    #grossPay = 5000.65;

    get grossPay(){
        return Util.formatCurrency(this.#grossPay);
    }

}
module.exports = Employee;