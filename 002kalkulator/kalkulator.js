// var buttonPluss = document.getElementById("buttonPlus");
// var buttonMinus = document.getElementById("buttonMinus");
// var buttonMultiply = document.getElementById("buttonMultiply");
// var buttonDevide = document.getElementById("buttonDevide");
// вместо того что искать каждую кнопку, находим все кнопки у которых есть тот класс
var operationButtons = document.getElementsByClassName("buttons");
var inputNiz1 = document.getElementById("inputId1-niz");
var inputNiz2 = document.getElementById("inputId2-niz");

function maceOperation(operationCode) {
    var getNumber1 = Number(inputNiz1.value);
    var getNumber2 = Number(inputNiz2.value);

    if (operationCode === "+") {
        var summ = getNumber1 + getNumber2;
    } else if (operationCode === "-") {
        var summ = getNumber1 - getNumber2;
    } else if (operationCode === "*") {
        var summ = getNumber1 * getNumber2;
    } else if (operationCode === "/") {
        var summ = getNumber1 / getNumber2;
    } else {
        window.alert("operation is unknown");
    }
    window.alert(summ);
}
// Вместо всех кнопок создаю onOperationButtonClick!!!!!!!!
// function onButtonPlussClick(params) {
//     maceOperation("+");
// }

// function onbuttonMinusClick(params) {
//     maceOperation("-");
// }

// function onbuttonMultiplyClick(params) {
//     maceOperation("*");
// }

// function onbuttonDevideClick(params) {
//     maceOperation("/");
// }
// Действует на событие в нашем случае Click
function onOperationButtonClick(eventObject) {
    var clickElement = eventObject.currentTarget;
    var operation = clickElement.innerHTML;
    maceOperation(operation);
}
// var button = [buttonPluss, buttonMinus, buttonMultiply, buttonDevide];

for (var index = 0; index < operationButtons.length; index++) {
    operationButtons[index].addEventListener("click", onOperationButtonClick);
}