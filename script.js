function solve(operation){
    /*
        Receve uma string e retorna o valor da operação
    */
    let indexSoma = operation.indexOf('+')
    let indexSub = operation.indexOf('-')
    let indexDiv = operation.indexOf('/')
    let indexMult = operation.indexOf('*')

    if (
        indexSoma == -1 && 
        indexSub == -1 && 
        indexMult == -1 && 
        indexDiv == -1) {
            return Number(operation)
        }
    else {
        let arrIndex = [indexSoma, indexSub, indexMult, indexDiv]
        let menor = arrList[0]

        for(let index of arrIndex){
            if(index < menor){
                menor = index
            }
        }
    }
}


console.log(
    solve("13+12-15+4")
)