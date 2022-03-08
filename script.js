let datosUsuario = document.getElementById("datosUsuario").style.display="none"
let calcularDatos =document.getElementById("calcularDatos")
function calcular (){
    let datosUsuario = document.getElementById("datosUsuario").style.display="block"
    
    
    let sexoU = document.getElementById("sexoUsuario").value
    let edad = document.getElementById("edad").value
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    
    
    let validacionesUsuario = {
        sexo : sexoU,
        edad : edad,
        peso : peso,
        altura : altura
        }
    genero = document.getElementById("genero")
    genero = genero.innerHTML = `tu genero es  <strong>${sexoU}</strong><br>`
    let edadReadOnly = document.getElementById("edadReadOnly").value = validacionesUsuario.edad
    let pesoReadOnly = document.getElementById("pesoReadOnly").value = validacionesUsuario.peso
    let alturaReadOnly = document.getElementById("alturaReadOnly").value = validacionesUsuario.altura
    let imc= peso/(altura * altura)
    imc = imc.toFixed(1)
        
    
    let indiceMasa = document.getElementById("indiceMasa")
    indiceMasa.innerHTML =`<span> <strong>su indice de masa corporal es:<strong> ${imc}<span><br>`
    let caja1 = document.querySelector(".caja1")
    let categoriaSalud = document.getElementById("categoriaSalud")

    if(imc < 18.5){
        categoriaSalud.innerHTML = "<span><strong> bajo peso</strong></span>"
        caja1.style.background="blue"
    }else if( imc >= 18.5 && imc < 24.9){
        categoriaSalud.innerHTML = "<span><strong> saludable</strong></span>"
        caja1.style.background="green"
    }else if(imc >= 24.9 && imc < 29.9){
        categoriaSalud.innerHTML = "<span><strong> con sobre peso </strong></span>"
        caja1.style.background="yellow"
    }else if(imc >= 30.0 && imc < 39.9){
        categoriaSalud.innerHTML = "<span><strong> obeso</strong></span>"
         caja1.style.background="red"
    }else if(imc>40 ){
        categoriaSalud.innerHTML = "<span><strong> obeso</strong></span>"
        caja1.style.background="pink"
    }
    } 

