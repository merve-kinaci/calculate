var xInput, yInput, zInput, tInput, formulInput, formulaArray;

function handleClick(){
    getInputsValues();
    formulaParser();
    calculater();
    document.getElementById("result").value = formulaArray[0];
}

function getInputsValues(){
    xInput = document.getElementById("x").value;
    yInput = document.getElementById("y").value;
    zInput = document.getElementById("z").value;
    tInput = document.getElementById("t").value;
    formulInput = document.getElementById("formul").value;
}

function formulaParser(){
    formulaArray = formulInput.split('');
    formulaArray[0] = parseInt(xInput);
    formulaArray[2] = parseInt(yInput);
    formulaArray[4] = parseInt(zInput);
    formulaArray[6] = parseInt(tInput);
}

function calculater(){
    var c;
    var index = formulaArray.indexOf('*');
    var index2 = formulaArray.indexOf('/');
    var index3 = formulaArray.indexOf('+');
    var index4 = formulaArray.indexOf('-');

    if(index > 0) {
        c = formulaArray[index-1] * formulaArray[index+1];
        formulaArray.splice(index-1, 3, c);
    }else if(index2 > 0) {
        c = formulaArray[index2-1] / formulaArray[index2+1];
        formulaArray.splice(index2-1, 3, c);
    }else if(index3 > 0) {
        c = formulaArray[index3-1] + formulaArray[index3+1];
        formulaArray.splice(index3-1, 3, c);
    }else if(index4 > 0) {
        c = formulaArray[index4-1] - formulaArray[index4+1];
        formulaArray.splice(index4-1, 3, c);
    }

    if(formulaArray.length > 1){
        calculater();
    } else {
        return;
    }
    
}
