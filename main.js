
function view(){

    let content= document.getElementById("text-notes").value;
    for(i=0; i<10;i++){
    document.getElementById("1").innerHTML=content;
    document.getElementById("text-notes").value=" ";
    document.write(i);
}
}
function clear(){
    document.getElementById("text-notes").innerText=" ";
}