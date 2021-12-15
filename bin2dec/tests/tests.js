const binary = require("../src/binary");
const assert = require("assert");

{ 
    console.log("not allows the user to enter strings up to eight binary digits")
    assert.throws(() => new binary("101001011"), {message: "max size is 8"})    
    console.log("-> passed")
}

{ 
    console.log("allows the user to enter strings binary") 
    const num = new binary("011");
    assert.deepStrictEqual(num.value, "011")
    assert.throws(() => new binary("30100101"), {message: "value isn't binary"})
    console.log("-> passed")
}

{
    console.log("arrays may not be used to contain the binary digits entered by the user")
    assert.throws(() => new binary(["100101"]), {message: "value can't is array"})
    console.log("-> passed")

}

{
    console.log("transform binary number to decimal");
    const numZero = new binary("000");
    assert.deepStrictEqual(numZero.decimalValue, 0)
    const numOne = new binary("001");
    assert.deepStrictEqual(numOne.decimalValue, 1)
    const numTwo = new binary("010");
    assert.deepStrictEqual(numTwo.decimalValue, 2)
    const numSeven = new binary("111");
    assert.deepStrictEqual(numSeven.decimalValue, 7)
    console.log("-> passed")

}