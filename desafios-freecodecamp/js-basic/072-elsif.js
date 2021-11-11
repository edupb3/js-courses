/**
 * Introduzir instruções else if
Se você tem múltiplas condições que precisam ser resolvidas, você pode encadear as instruções if junto com instruções else if.

if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
Converta a lógica para usar instruções else if.
 */

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    } else{
  
      return "Between 5 and 10";
    }
  }
  
  testElseIf(7);