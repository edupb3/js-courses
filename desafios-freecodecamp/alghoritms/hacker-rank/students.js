
class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, idNumber, testScores){
        super(firstName, lastName, idNumber);
        this.testScores = testScores;
    }

    scale(score) {        
        if(score >= 90 && score <= 100){
            return "O";
        }
        if(score >= 80 && score < 90){
            return "E";
        }
        if(score >= 70 && score < 80){
            return "A";
        }
        if(score >= 55 && score < 70){
            return "P";
        }
        if(score >= 40 && score < 55){
            return "D";
        }
        if(score < 40){
            return "T";
        }
        return;
    }
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate(){        
        const average = this.testScores.reduce((acc, el, index, arr) =>{                        
            if (index == arr.length - 1){
                acc = acc + el;
                return acc / arr.length;
            }
            return acc = acc + el;
        },0)        
        return this.scale(average);
    }
}

let s = new Student("Heraldo", "Memelli", 2, [100, 50, 70, 60, 80,60])
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())