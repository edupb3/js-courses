
const entityBase = require("./src/entityBase")
const assert = require("assert");
const Employee = require("./src/employee");
const Util = require("./src/util");

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const entity = new entityBase({name:"Eduardo", age:39, gender:GENDER.male});
    assert.deepStrictEqual(entity.name, "Mr. Eduardo");
    assert.deepStrictEqual(entity.birthYear, 1982);
    assert.deepStrictEqual(entity.age, undefined);
}

{
    const employee = new Employee({name:"Isadora", age:4, gender:GENDER.female});
    assert.deepStrictEqual(employee.name, "Ms. Isadora");
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.65))
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.52))
}

{
    const employee = new Employee({name: "Henrique", gender:GENDER.male});
    assert.deepStrictEqual(employee.name, "Mr. Henrique")
    assert.throws(() => employee.birthYear, {message: "missing age"})
}

