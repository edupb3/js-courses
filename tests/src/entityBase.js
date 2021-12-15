class EntityBase {
    #name
    #age
    #gender

    constructor({name, age, gender}){
        this.#name = name;
        this.#gender = gender;
        this.#age = age
    }

    get name(){
        const preffix = (this.#gender === "male" ? "Mr." : "Ms.")
        return `${preffix} ${this.#name}`;
    }

    get birthYear() {        
        if (!this.#age) {
            throw new Error("missing age");
        }
        return new Date().getFullYear() - this.#age
    }

    set age(age){
        this.#age = age;
    }

}

module.exports = EntityBase;