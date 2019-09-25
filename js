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
}
