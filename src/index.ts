let salary= document.querySelector("input")!
let tax  = document.querySelector("#tax")!
let neto = document.querySelector("#neto")!
let calcBtn:HTMLButtonElement = document.querySelector("button")!

let newSalary = 0
let newTax = 0

calcBtn.addEventListener("click", onCalc)!

function onCalc(){
    
    neto.innerHTML = " סכום הנטו שלך "
    tax.innerHTML = "סה''כ מס שנלקח ממך " 
    let inputSalary = parseInt(salary.value)
    if(inputSalary != null){
        if(inputSalary <= 6450){
            newSalary = inputSalary*0.9
            newTax = inputSalary*0.1
        }
        if((inputSalary > 6450) && (inputSalary <=  9240) ){
            newTax = (inputSalary-6450)*0.14 + 645
            newSalary=inputSalary-newTax
        }
        if((inputSalary > 9240) && (inputSalary <=  14840) ){
            newTax = (inputSalary-9420)*0.2 +1036
            newSalary = inputSalary-newTax
        }
        if((inputSalary > 14840) && (inputSalary <=  20620) ){
            newTax = (inputSalary-14840)*0.31 + 2156
            newSalary= inputSalary-newTax
        }
        if((inputSalary > 20620) && (inputSalary <=  42910) ){
            newTax = (inputSalary-20620)*0.35+3947
            newSalary = inputSalary-newTax
        }
        if((inputSalary > 42910) && (inputSalary <=  55270) ){
            newTax = (inputSalary-42910)*0.47+11749
            newSalary = inputSalary-newTax
        }
        if(inputSalary > 55270){
            newTax = (inputSalary-55270)*0.5 + 17558
            newSalary = inputSalary-newTax
        }
        (newTax).toFixed(2)
        tax.innerHTML += "<strong>"+newTax.toString()+"</strong>"
        neto.innerHTML += "<strong>"+newSalary.toString()+"</strong>"

        salary.value = ""
    }
}