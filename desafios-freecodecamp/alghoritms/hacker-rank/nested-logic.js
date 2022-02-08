/*Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:
1 - If the book is returned on or before the expected return date, no fine will be charged (i.e.:fine=0) .

2 - If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 hackos x (the numbers of day late) 

3 - If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 hackos x (the numbers of months late) 

4 - If the book is returned after the calendar year in which it was expected, there is a fixed fine of
1000 Hackos
*/

function processData(input) {
    const [returned, expected] =  input.split("\n")
    const yearExpected  = Number.parseInt(expected.split(" ")[2]);
    const yearReturned  = Number.parseInt(returned.split(" ")[2]);
    const monthExpected = Number.parseInt(expected.split(" ")[1]);
    const monthReturned = Number.parseInt(returned.split(" ")[1]);
    const dayExpected   = Number.parseInt(expected.split(" ")[0]);
    const dayReturned   = Number.parseInt(returned.split(" ")[0]);

    if(yearReturned > yearExpected){
        return 10000
    }
    if(yearExpected > yearReturned){
        return 0
    }
    if(monthReturned > monthExpected){
        return 500 * (monthReturned - monthExpected)
    }
    if(monthReturned < monthExpected){
        return 0
    }
    if(dayReturned > dayExpected){        
        return 15 * (dayReturned - dayExpected)
    }
    else{
        return 0
    }
    
    //const date = 0+dayExpected + "/"+ 0+monthExpected + "/"+ yearExpected
    // const date = new Date(0+dayExpected + "/"+ 0+monthExpected + "/"+ yearExpected)
    // const actual = new Intl.DateTimeFormat("pt-br").format(date)
    // console.log(actual);
    
    
} 

//console.log(processData(`9 6 2015
//6 6 2015`))

// console.log(processData(`26 11 2015
// 6 11 2015`))

console.log(processData(`31 8 2004
20 1 2004`))