/**
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

function verificarDiaUtil(dia){
    if (0 < dia <= 31){
        const domingo = 1;
        const sabado = 7;
        switch( dia % sabado === 0 || dia % domingo+7 ===0 || dia === domingo ){            
            case true:
                return "Fim de semana"
                break;                
            default:            
                return "Dia útil"
                  
        }
        // if (dia % sabado === 0 || dia % domingo+7 === 0 || domingo === dia){
        //     return "Não é dia útil"
        // }else{
        //     return "Dia útil"
        // }
    }else{
        return "Dia Inválido"
    }    
}

console.log(verificarDiaUtil(28))