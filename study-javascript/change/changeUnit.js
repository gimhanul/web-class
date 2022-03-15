let resultSpan = document.getElementById("result");

function changeUnit() {
    let beforeUnit = document.getElementById("beforeUnit");
    let afterUnit = document.getElementById("afterUnit");
    let num = document.getElementById("before").value;


    let before = beforeUnit.options[beforeUnit.selectedIndex].value;
    let after = afterUnit.options[afterUnit.selectedIndex].value;

    let result = getResult(before, after, num);
    resultSpan.innerText = result;
}

function getResult(before, after, num) {
    beforeNum = getBeforeNum(before, num);
    afterNum = cmToYd(beforeNum);

    switch(after) {
        case 'in':
            return afterNum * 36;

        case 'ft':
            return afterNum * 3; 

        case 'yd':
            return afterNum;        
    }
}

function getBeforeNum(before, num) {
    switch(before) {
        case 'cm':
            return num;
        case 'm':
            return num * 100;
        case 'km':
            return num * 100000;
    }
}

function cmToYd(cm) {
    return cm * 0.0109361;
}