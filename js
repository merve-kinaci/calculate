var x, y, z, t, formul, formulaArray;

function handleClick(){
    getValue();
    formulaParser();
}
function getValue(){
    x = document.getElementById("x").value;
    y = document.getElementById("y").value;
    z = document.getElementById("z").value;
    t = document.getElementById("t").value;
    formul = document.getElementById("formul").value;
}
function formulaParser(){
    formulaArray = formul.split('');
    var x1 = parseInt(formulaArray[0]=x);
    var y1 = parseInt(formulaArray[2]=y);
    var z1 = parseInt(formulaArray[4]=z);
    var t1 = parseInt(formulaArray[6]=t);
    for(i=0; i<7; i++){
        if(formulaArray[i]=="*"){
            a = parseInt(formulaArray[i-1])*parseInt(formulaArray[i+1]);
            console.log(formulaArray.splice(i-1,i+2));}
        else if(formulaArray[i]=="/"){
            b = parseInt(formulaArray[i-1])/parseInt(formulaArray[i+1]);
            console.log(formulaArray.splice(i-1,i+2));}
        else if(formulaArray[i]=="+"){
            c = parseInt(formulaArray[i-1])+parseInt(formulaArray[i+1]);
            console.log(formulaArray.splice(i-1,i+2));}
        else if(formulaArray[i]=="-"){
            d = parseInt(formulaArray[i-1])-parseInt(formulaArray[i+1]);
            console.log(formulaArray.splice(i-1,i+2));}
        }
}
//x=2,y=2,z=8,t=4 ve formule x*y+z/4 yazdigimda Array(3) [ "2", "*", "2" ], Array(3) [ "8", "/", "4" ] sonuclari goruntuleniyor
