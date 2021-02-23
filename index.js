const btn0 = document.querySelector('#btn0')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const btnSuma = document.querySelector('#btnMas')
const btnResta = document.querySelector('#btnMenos')
const btnMulti = document.querySelector('#btnMulti')
const btnDivision = document.querySelector('#btnDivision')
const btnLimpiar = document.querySelector('#btnLimpiar')
const btnIgual = document.querySelector('#btnIgual')
const resultado = document.querySelector('#resultado')


// resultado.addEventListener('click')
let valorActual=""
btnMas.addEventListener('click',()=>{
    const valorAnterior = valorActual

    let suma = valorAnterior + parseInt(valorActual)
    console.log(suma)

    
})
btn1.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn1.value
})
btn2.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn2.value
})
btn3.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn3.value
})
btn4.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn4.value
})
btn5.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn5.value
})
btn6.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn6.value
})
btn7.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn7.value
})
btn8.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn8.value
})
btn9.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn9.value
})
btn0.addEventListener('click',()=>{
    resultado.textContent = resultado.textContent + btn0.value
})

let num1= 0
let num2=0
let operador
btnResta.addEventListener('click',()=>{
    num1 = resultado.textContent
    operador = "-"
    limpiar()
})
btnSuma.addEventListener('click',()=>{
    num1 = resultado.textContent
    operador = "+"
    limpiar()
})
btnMulti.addEventListener('click',()=>{
    num1 = resultado.textContent
    operador = "*"
    limpiar()
})

btnDivision.addEventListener('click',()=>{
    num1 = resultado.textContent
    operador = "/"
    limpiar()
})

btnIgual.addEventListener('click',()=>{
    num2 = resultado.textContent
    resolver()
})

btnLimpiar.addEventListener('click',()=>{
    resetear()
})

const limpiar=()=>{
    resultado.textContent=""
}

const resetear = ()=>{
    resultado.textContent=""
    num1=0
    num2=0
    operador=""
}

const resolver=()=>{
    let res = 0
    switch(operador){
        case "-":
            res = parseFloat(num1) - parseFloat(num2)
            break
        
        case "+":
            res = parseFloat(num1) + parseFloat(num2)
            break

        case "*":
            res = parseFloat(num1) * parseFloat(num2)
            break

        case "/":
            res = parseFloat(num1) / parseFloat(num2)
            break
    }
    resetear()
    resultado.textContent = res
}
