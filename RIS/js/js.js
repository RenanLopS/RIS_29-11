function carregar(){
let msg = window.document.querySelector('.msg');


let data = new Date();
let hora = data.getHours();
let min = data.getMinutes();

if(hora > 6 && hora < 12){
    msg.innerHTML = ` Bom Dia`;

    

}else if(hora > 12 && hora <18){
    msg.innerHTML = ` Boa tarde`;

    
} else{
    
    msg.innerHTML = ` Boa Noite`;

}
    
}