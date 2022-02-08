/*Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:
1 - If the book is returned on or before the expected return date, no fine will be charged (i.e.:fine=0) .

2 - If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 hackos x (the numbers of day late) 

3 - If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 hackos x (the numbers of months late) 

4 - If the book is returned after the calendar year in which it was expected, there is a fixed fine of
1000 Hackos
*/

const YEAR_INDEX = 2;
const MONTH_INDEX = 1;
const DAY_INDEX = 0

const extractParams = ([expected, returned]) => {
    return index => [Number.parseInt(expected.split(" ")[index]), Number.parseInt(returned.split(" ")[index])];
}

const verifyYear = (yearReturned, yearExpected) => {
    if(yearReturned > yearExpected){
        return 10000
    }
    if(yearExpected > yearReturned){
        return 0
    }
    return -1;
}

const verifyMonth = (monthReturned, monthExpected) => {
    if(monthReturned > monthExpected){
        return 500 * (monthReturned - monthExpected)
    }
    if(monthReturned < monthExpected){
        return 0
    }
    return -1;
}

const verifyDay = (dayReturned, dayExpected) => {
    if(dayReturned > dayExpected){        
        return 15 * (dayReturned - dayExpected)
    }
    return 0    
}

function processData(input) {    
    const [returned, expected] =  input.split("\n")
    const extract = extractParams([expected, returned]);
    const [yearExpected, yearReturned]  = extract(YEAR_INDEX);
    const [monthExpected, monthReturned]  = extract(MONTH_INDEX);
    const [dayExpected, dayReturned]  = extract(DAY_INDEX);
    
    let ret = verifyYear(yearReturned, yearExpected);
    
    if (ret === -1){
        ret = verifyMonth(monthReturned, monthExpected);
        if(ret === -1){
            ret = verifyDay(dayReturned, dayExpected);
        }
    }    
    return ret;
} 

console.log(processData(`9 6 2015
6 6 2015`))

console.log(processData(`26 11 2015
 6 11 2015`))

console.log(processData(`31 8 2004
20 1 2004`))