const MAX_LENGTH = 20
        
/* Backspace */ 
function backSpace(){
    let label = window.document.getElementById("label")
    label.value = label.value.slice(0 , label.value.length-1)
}
/* Inserir o ponto flutuante */
function inserePonto(){
    let label = window.document.getElementById("label")

    if(label.value[label.value.length - 1] != '.'){
        label.value += '.'
    }
}

/* Inserir um numero qualquer */ 
function insereNumero(num){
    var label = window.document.getElementById("label")

    if(label.value.length <= MAX_LENGTH){
        if(num == '0'){
            if(label.value != '0'){
                label.value += num
            }
        }
        else{
            label.value += num
        }
    }
}

/* Inserir um operador */ 
function insereOperador(op){
    var label = window.document.getElementById("label")
        if(label.value !== "" && label.value.length <= MAX_LENGTH){
        
        if(
            Number(label.value[label.value.length-1]) !== NaN
        ){
            /* Ultimo elemento é um numero  */

            if(label.value.indexOf('+') != -1){
                /* Existe o operador de soma no label */
                let listValues = label.value.split('+')

                if( listValues.length > 2){
                    label.value = "Erro"
                }
                else{
                    let result = Number(listValues[0]) + Number(listValues[1])
                    if(Number.isInteger(result)){
                        label.value = result.toString() + '+'
                    }
                    else{
                        let resultStr = result.toString()
                        let lenDecimal = resultStr.split('.')[1].length
                        if(lenDecimal > 4){
                            lenDecimal = 4
                        }
                        label.value = result.toFixed(lenDecimal).toString() + '+'
                    }
                }
            }
            else if(label.value.indexOf('-') != -1){
                /* Existe o operador de subtração no label */
                let listValues = label.value.split('-')

                if( listValues.length > 2){
                    label.value = "Erro"
                }
                else{
                    let result = Number(listValues[0]) - Number(listValues[1])
                    if(Number.isInteger(result)){
                        label.value = result.toString() + '-'
                    }
                    else{
                        let resultStr = result.toString()
                        let lenDecimal = resultStr.split('.')[1].length
                        if(lenDecimal > 4){
                            lenDecimal = 4
                        }
                        label.value = result.toFixed(lenDecimal).toString() + '-'
                    }
                }
            }
            else if(label.value.indexOf('*') != -1){
                /* Existe o operador de multiplicação no label */
                let listValues = label.value.split('*')

                if( listValues.length > 2){
                    label.value = "Erro"
                }
                else{
                    let result = Number(listValues[0]) * Number(listValues[1])
                    if(Number.isInteger(result)){
                        label.value = result.toString() + '*'
                    }
                    else{
                        let resultStr = result.toString()
                        let lenDecimal = resultStr.split('.')[1].length
                        if(lenDecimal > 4){
                            lenDecimal = 4
                        }
                        label.value = result.toFixed(lenDecimal).toString() + '*'
                    }
                }
            }
            else if(label.value.indexOf('/') != -1){
                /* Existe o operador de Divisão no label */
                let listValues = label.value.split('/')

                if( listValues.length > 2){
                    label.value = "Erro"
                }
                else{
                    if(Number(listValues[1]) === 0){
                        label.value = "Erro. Não permitido divisão por zero"
                    }
                    else{
                        let result = Number(listValues[0]) / Number(listValues[1])
                        if(Number.isInteger(result)){
                            label.value = result.toString() + '/'
                        }
                        else{
                            let resultStr = result.toString()
                            let lenDecimal = resultStr.split('.')[1].length
                            if(lenDecimal > 4){
                                lenDecimal = 4
                            }
                            label.value = result.toFixed(lenDecimal).toString() + '/'
                        }
                    }
                }
            }
            else {
                label.value+=op
            }
            
        }
        }
}

/* Limpar o input */ 
function limpaInput(){
    var label = window.document.getElementById("label")
    label.value = ""
}

/* Calcular a operação no input */ 

function solve(){
    var label = window.document.getElementById("label")
    
    if(label.value.indexOf('+') != -1){
        /* Operação de soma */ 
        let listValues = label.value.split('+')

        if( listValues.length > 2){
            label.value = "Erro"
        }
        else{
            let result = Number(listValues[0]) + Number(listValues[1])
            if(Number.isInteger(result)){
                label.value = result.toString()
            }
            else{
                let resultStr = result.toString()
                let lenDecimal = resultStr.split('.')[1].length
                if(lenDecimal > 4){
                    lenDecimal = 4
                }
                label.value = result.toFixed(lenDecimal).toString()
            }
        }
    }

    else if(label.value.indexOf('-') != -1){
        /* Operação de subtração */ 
        let listValues = label.value.split('-')
        if( listValues.length > 2){
            label.value = "Erro"
        }
        else{
            let result = Number(listValues[0]) - Number(listValues[1])
            if(Number.isInteger(result)){
                label.value = result.toString()
            }
            else{
                let resultStr = result.toString()
                let lenDecimal = resultStr.split('.')[1].length
                if(lenDecimal > 4){
                    lenDecimal = 4
                }
                label.value = result.toFixed(lenDecimal).toString()
            }
        }
    }

    else if(label.value.indexOf('*') != -1){
        /* Operação de multiplicação */ 
        let listValues = label.value.split('*')

        if( listValues.length > 2){
            label.value = "Erro"
        }
        else{
            let result = Number(listValues[0]) * Number(listValues[1])
            if(Number.isInteger(result)){
                label.value = result.toString()
            }
            else{
                let resultStr = result.toString()
                let lenDecimal = resultStr.split('.')[1].length
                if(lenDecimal > 4){
                    lenDecimal = 4
                }
                label.value = result.toFixed(lenDecimal).toString()
            }
        }
    }

    else if(label.value.indexOf('/') != -1){
        /* Operação de divisão */ 
        let listValues = label.value.split('/')

        if( listValues.length > 2){
            label.value = "Erro"
        }
        else{
            let result = Number(listValues[0]) / Number(listValues[1])
            if(Number.isInteger(result)){
                label.value = result.toString()
            }
            else{
                let resultStr = result.toString()
                let lenDecimal = resultStr.split('.')[1].length
                if(lenDecimal > 4){
                    lenDecimal = 4
                }
                label.value = result.toFixed(lenDecimal).toString()
            }
        }
    }
}