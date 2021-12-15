
const entityBase = require("./src/entityBase")
const assert = require("assert");
const Employee = require("./src/employee");
const Util = require("./src/util");

{
    const entity = new entityBase({name:"Eduardo", age:39, gender:"male"});
    assert.deepStrictEqual(entity.name, "Mr. Eduardo");
    assert.deepStrictEqual(entity.birthYear, 1982);
    assert.deepStrictEqual(entity.age, undefined);
}

{
    const employee = new Employee({name:"Isadora", age:4, gender:"female"});
    assert.deepStrictEqual(employee.name, "Ms. Isadora");
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.65))
}


