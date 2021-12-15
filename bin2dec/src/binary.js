class Binary{
    #value
    static #maxSize = 8;

    constructor(value){        
        this.verifyParameterIsArray(value);
        this.verifySize(value);
        this.verifyBinary(value);
        this.#value = value
    }

    verifySize(value) {        
        if (value.length > Binary.#maxSize) {            
            throw Error("max size is 8");
        }
    }
    verifyBinary(value){
        if (!(/^[01]+$/.test(value))){
            throw Error("value isn't binary")
        }
    }
    verifyParameterIsArray(value){
        if (value.constructor === Array){
            throw Error("value can't is array")
        }
    }

    sumElements = (a, b) => parseInt(a) + parseInt(b) 
    
    decimalTransform = (el, index) => (el === "1") ? 2 ** (index): 0;            
    
    get value(){
        return this.#value
    }
    get decimalValue(){
        let temp = this.#value.split("").reverse();                
        
        return temp.map(this.decimalTransform).reduce(this.sumElements);
        
    }

}

module.exports = Binary;