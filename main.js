
function view(){
    let content= document.getElementById("text-notes").value;
    document.getElementById("a1").innerHTML=content;
    document.getElementById("text-notes").value=" ";
}
function clear(){
    document.getElementById("text-notes").innerText=" ";
}