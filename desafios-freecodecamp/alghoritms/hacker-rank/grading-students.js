/**HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
If the value of  is less than , no rounding occurs as the result will still be a failing grade. */

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    return grades.map(grade => {        
        if(grade < 38){
            return grade;
        }
        const rest = 5 - grade % 5;
        return rest < 3 ? grade + rest : grade;        
    })

}

console.log(gradingStudents([73,67,38,33]));