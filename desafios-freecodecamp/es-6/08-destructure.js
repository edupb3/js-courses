/**Usar atribuição de desestruturação para atribuir variáveis de objetos
Desestruturar o permite atribuir um novo nome de variável quando extrair valores. Você pode fazer isso ao colocar o novo nome após dois pontos quando atribuir o valor.

Usando o mesmo objeto do exemplo anterior:

const user = { name: 'John Doe', age: 34 };
Aqui está como você pode dar novos nomes a variáveis na atribuição:

const { name: userName, age: userAge } = user;
Você pode lê-lo como "pegue o valor de user.name e atribua-o a uma nova variável chamada userName" e assim em diante. O valor de userName seria a string John Doe e o valor de userAge seria o número 34.

Substitua as duas atribuições com uma atribuição de desestruturação equivalente. Ainda deve ser atribuído às variáveis highToday e highTomorrow os valores de today e tomorrow do objeto HIGH_TEMPERATURES. */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Altere apenas o código abaixo desta linha
  
  const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;
  //const {highTomorrow: tomorrow} = HIGH_TEMPERATURES; 
  
  // Altere apenas o código acima desta linha

  console.log(highToday, highTomorrow);