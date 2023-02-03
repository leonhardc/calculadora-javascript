const TO_FIXED_DECIMAL = 2

function solve(operation){
    /* 
        Recebe um argumento chamado 'operation' e retorna o valor daquela operação 
    */
    if(!isNaN(operation)){
        return operation
    }    
    if(operation.indexOf('/') != -1){
        /* Processa operação de divisão */
        const regex = /\d+(\.\d+)*\/\d+(\.\d+)*/
        const subOperation = regex.exec(operation)[0]
        const operators = subOperation.split('/')
        const result = Number(operators[0])/Number(operators[1])
        if(!Number.isInteger(result)){
            return solve(operation.replace(subOperation, String(result.toFixed(TO_FIXED_DECIMAL))))    
        }
        return solve(operation.replace(subOperation, String(result)))        

    }
    if(operation.indexOf('*') != -1){
        /* Processa operação de multiplicação */
        const regex = /\d+(\.\d+)*\*\d+(\.\d+)*/
        const subOperation = regex.exec(operation)[0]
        const operators = subOperation.split('*')
        const result = Number(operators[0])*Number(operators[1])
        if(!Number.isInteger(result)){
            return solve(operation.replace(subOperation, String(result.toFixed(TO_FIXED_DECIMAL))))    
        }
        return solve(operation.replace(subOperation, String(result)))
    }
    if(operation.indexOf('+') != -1){        
        /* Processa operação de adição */
        const regex = /\d+(\.\d+)*\+\d+(\.\d+)*/
        const subOperation = regex.exec(operation)[0]
        const operators = subOperation.split('+')
        const result = Number(operators[0])+Number(operators[1])
        if(!Number.isInteger(result)){
            return solve(operation.replace(subOperation, String(result.toFixed(TO_FIXED_DECIMAL))))    
        }
        return solve(operation.replace(subOperation, String(result)))
    }
    if(operation.indexOf('-') != -1){
        /* Processa operação de subtração */
        const regex = /\d+(\.\d+)*-\d+(\.\d+)*/
        const subOperation = regex.exec(operation)[0]
        const operators = subOperation.split('-')
        const result = Number(operators[0])-Number(operators[1])
        if(!Number.isInteger(result)){
            return solve(operation.replace(subOperation, String(result.toFixed(TO_FIXED_DECIMAL))))    
        }
        return solve(operation.replace(subOperation, String(result)))
    }
}


const operations = [
    "12*2+4-25.0/5-4/5",
    "12*2+4-4/5",
    "4-25.0/5-4/5",
    "4/5",
    "12*2",
    "12+2",
    "12-2",
]

for(operation of operations){
    console.log(solve(operation))
}
