function checaCaps(event){
    const mens= document.getElementById('mensagem')
    if(event.shiftKey){
        mens.innerHTML = "Apertando Shift"
    }else{
        mens.innerHTML = ""
    }
}