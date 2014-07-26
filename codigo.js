/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function validar() {
    var Edad = document.getElementById("Edad");
    if(Edad.value === ""){
        alert("falta llenar el campo de edad");
        return false;
    }else{
        return true;
    }        
}

function colorear(){
    var text_box = document.getElementById("Edad");
    text_box.style["background"] = "red";
}

function descolorear(){
    var text_box = document.getElementById("Edad");
    text_box.style["background"] = "white";
}