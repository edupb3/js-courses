/**Caixa registradora
Implemente uma função de caixa registradora checkCashRegister() que aceita o preço de compra como o primeiro argumento (price), pagamento como o segundo argumento (cash) e dinheiro na registradora (cid) como o terceiro argumento.

cid é um array de duas dimensões listando a moeda disponível e a quantidade.

A função checkCashRegister() deve sempre retornar um objeto com a chave status e uma chave change.

Retorne {status: "INSUFFICIENT_FUNDS", change: []} se o dinheiro no caixa for menor que o troco devido, ou se você não pode retornar o troco exato.

Retorne {status: "CLOSED", change: [...]} com dinheiro no caixa como o valor para a chave change se for igual ao troco devido.

Caso contrário, retorne {status: "OPEN", change: [...]}, com o troco devido em moedas e notas, ordenado do maior para o menor, como o valor da chave change.

Unidade de moeda	Quantidade
Penny	$0,01 (PENNY)
Nickel	$0,05 (NICKEL)
Dime	$0,1 (DIME)
Quarter	$0,25 (QUARTER)
Dólar	$1 (ONE)
Cinco dólares	$5 (FIVE)
Dez dólares	$10 (TEN)
Vinte dólares	$20 (TWENTY)
Cem dólares	$100 (ONE HUNDRED)
Veja abaixo um exemplo de um array de dinheiro no caixa (cid):

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
] */
let funds = 0;

const changeCalculate = (cash, price) => cash - price;

let notas = [];    
let troco = 0;
let cidOrigin = null;
const cedulas = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    ONE_HUNDRED: 100
}


function checkCashRegister(price, cash, cid) {
    let change = changeCalculate(cash, price);
    
    for(let i in cid){
        funds += cid[i][1];
    }
    
    if (funds.toFixed(2) < change){
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    }        
    if (funds.toFixed(2) === change){
        return {
            status: "CLOSED",
            change: cid
        }
    }else{        
        return sacarDinheiro(change, cid);
    }    
    
  }

  const clonarCid = cid => cidOrigin === null ?  cid.slice().map(i => i.slice())  : cidOrigin;  
  const calcularTroco = (troco, valor) => troco === 0 ? valor : troco;

  function sacarDinheiro(valor, cid = [], cedula = cedulas.ONE_HUNDRED, index = 8){ 
    cidOrigin = clonarCid(cid);    
    troco = calcularTroco(troco, valor);
    let emCaixa = cid[index][1];
    let tipo = cid[index][0];
    let quantCedulasNecessarias = parseInt(valor.toFixed(2) / cedula);
    let quantCedulasEmCaixa = parseInt(emCaixa / cedula);
    let valorRetirado = 0;    

    if (quantCedulasEmCaixa >= quantCedulasNecessarias){
        valorRetirado = quantCedulasNecessarias * cedula;
    }else{
        valorRetirado = quantCedulasEmCaixa * cedula;
    }
    
    valorRetirado !== 0 ? notas.push([tipo, valorRetirado]) : "";    
    cid[index][1] =  emCaixa - valorRetirado;
    
    
    switch(cedula){
        case 100:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.TWENTY, 7);
            break;
        case 20:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.TEN, 6);
            break;        
        case 10:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.FIVE, 5);
            break;        
        case 5:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.ONE, 4);
            break;        
        case 1:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.QUARTER, 3);
            break;        
        case 0.25:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.DIME, 2);
            break;        
        case 0.1:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.NICKEL, 1);
            break;        
        case 0.05:
            sacarDinheiro(valor - valorRetirado, cid, cedulas.PENNY, 0);        
            break;            
    }
    
    return verificarStatus(troco, notas, cidOrigin);
       
  }

  function verificarStatus(troco, notas, cid){ 
      
      let val = 0;     
      for (let i in notas){
          val += notas[i][1];
      }

      if (funds === troco){
          return {
              status: "CLOSED",
              change: cid
          }
      }
      
      if (val.toFixed(2) === troco.toFixed(2)){
          return {
            status: "OPEN",
            change: notas  
          } 
      }else if (val < troco){
          return {
              status: "INSUFFICIENT_FUNDS",
              change: []
          } 
      }else{
          return {
              status: "CLOSED",              
          } 
      }    
    
  }

  //let val =  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
   //console.log(val);

//    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //deve retornar um objeto.

//  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //deve retornar {status: "OPEN", change: [["QUARTER", 0.5]]}.

//  val = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 200]]) //deve retornar {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

//val = checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //deve retornar {status: "INSUFFICIENT_FUNDS", change: []}.

val = checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //deve retornar {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
 console.log(val);