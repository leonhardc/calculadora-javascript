function solve(operation){
    /*
        Receve uma string e retorna o valor da operação
    */
    console.log(operation)
    let indexSoma = operation.indexOf('+')
    let indexSub = operation.indexOf('-')
    let indexDiv = operation.indexOf('/')
    let indexMult = operation.indexOf('*')

    if (
        indexSoma == -1 && 
        indexSub == -1 &&
        indexMult == -1 && 
        indexDiv == -1)  {
            return Number(operation)
    }

    if(
        indexSub == 0 &&
        (
            indexSoma == -1 &&
            indexMult == -1 && 
            indexDiv == -1
        )
    ) {
        return Number(operation)
    }

    else {

        
        let arrIndex = [indexSoma, indexSub, indexMult, indexDiv]
        let arrIndexAux = []
        let menor = arrIndex[0]
        
        /* Removendo todos os indexes que são -1 */
        for(let index of arrIndex){
            if(index !== -1){
                arrIndexAux.push(index)
            }
        }
        
        arrIndex = arrIndexAux.slice(0)
        
        /* Achar o index do operador + ou - que ocorre primeiro */
        for(let index of arrIndex){
            if(index < menor && operation[index] != '/' && operation[index] != '*'){
                menor = index
            }
        }
        
        /* O operador é '+' ? */
        
        if(operation[menor] == '+'){
            let pEsqueda = operation.slice(0, menor)
            let pDireita =  operation.slice(menor+1)

            return solve(pEsqueda) + solve(pDireita)
        }
        
        /* O operador é '-' ? */
        
        if(operation[menor] == '-'){
            if(operation[0] == '-'){}
            let pEsqueda = operation.slice(0, menor)
            let pDireita =  operation.slice(menor+1)

            return solve(pEsqueda) + solve(pDireita)
        }

        /* Operador é '*' */

        if(operation[menor] == '*'){
            let pEsqueda = operation.slice(0, menor)
            let pDireita =  operation.slice(menor+1)

            return solve(pEsqueda) * solve(pDireita)
        }

        /* Operador é '/' */

        if(operation[menor] == '*'){
            let pEsqueda = operation.slice(0, menor)
            let pDireita =  operation.slice(menor+1)

            return solve(pEsqueda) / solve(pDireita)
        }
    }
    

}


console.log(
    solve("13+12-15+4")
)