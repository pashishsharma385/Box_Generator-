
var btn=document.getElementById("btng");
btn.addEventListener("click",gen);
var c=0;
// function for creating boxes
function gen(){
    var txt=document.getElementById("txt_bx").value;
    var colour=document.getElementById("clr_bx").value;
    for(let i=1;i<=txt;i++){
        c++;
        var generator=document.createElement("switch_btn");
        generator.innerHTML=c;
        generator.id="newsection";
        document.body.appendChild(generator).style.backgroundColor=colour;
    }
    var breakelement=document.createElement("BR");
    document.body.appendChild(breakelement);
    console.log(txt);

}