/**Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function calculateHour(h, pm){    
    let hour =  pm ? 12 + parseInt(h == 12 ? 0 : h) : h == 12 ? "00" : h;
    return hour == 24 ? "00" : hour;
}

function timeConversion(s) {
    let result = "";
    const pm = s.indexOf("PM") !== -1 
    let hour = s.substring(0,2);
    hour = calculateHour(hour, pm);
    
    result = hour + (s.substring(2,8));    
    console.log(result);
    return result;

}
//timeConversion("07:05:45AM");
timeConversion("12:40:22AM");
timeConversion("01:40:22PM");
timeConversion("00:00:00AM");
timeConversion("12:45:54PM");

