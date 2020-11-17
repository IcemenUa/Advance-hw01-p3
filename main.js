let editBtn = document.querySelector('#editBtn');

let textEdit = document.querySelector('.textEdit');

let textArea = document.querySelector('#editText');

let documentText = document.querySelector('.text')

editBtn.onclick = () => {
    textEdit.style.display = 'flex';
    document.querySelector('.style').style.display = 'none';
    textArea.value = documentText.innerHTML;
};


document.querySelector('#saveBtn').onclick = () => {

    documentText.innerHTML = textArea.value;
    textEdit.style.display = 'none';

};
let style = document.querySelector('.style');

document.querySelector('#styleBtn').onclick = () => {
    textEdit.style.display = 'none';
    style.style.display = 'flex';
};


for (let i = 0; i < document.getElementsByName('fontSize').length; i++) {

    document.getElementsByName('fontSize')[i].onclick = function (argument) {

        document.querySelector('.text').style.fontSize = argument.target.value;

    };
};

document.querySelector('#fontFam').onclick = function (argument) {

    document.querySelector('.text').style.fontFamily = argument.target.value;

};

document.querySelector('#txtColor').onclick = function () {
    document.querySelector('.colorText').style.display = 'flex';
    document.querySelector('.bgColor').style.display = 'none';
};

document.querySelector('#bgColor').onclick = function () {
    document.querySelector('.bgColor').style.display = 'flex';
    document.querySelector('.colorText').style.display = 'none';
};


for (let i = 0; i < document.querySelector('.colorText').children.length; i++) {
    document.querySelector('.colorText').children[i].onclick = function (arg) {

        document.querySelector('.text').style.color = arg.target.style.backgroundColor;
        document.querySelector('.colorText').style.display = 'none';
    };
};


for (let i = 0; i < document.querySelector('.bgColor').children.length; i++) {
    document.querySelector('.bgColor').children[i].onclick = function (arg) {

        document.querySelector('.text').style.backgroundColor = arg.target.style.backgroundColor;
        document.querySelector('.bgColor').style.display = 'none';
    };
};

document.querySelector('#italicCheckbox').onclick = (click) => {
    if (click.target.checked) {

        documentText.style.fontStyle = 'italic';
    } else {
        documentText.style.fontStyle = '';
    }
};

document.querySelector('#boldCheckbox').onclick = (click) => {
    if (click.target.checked) {

        documentText.style.fontWeight = 'bold';
    } else {
        documentText.style.fontWeight = '';
    }
};

let add = document.querySelector('.add');
let addBtn = document.querySelector('#addBtn')
addBtn.onclick = () => {
    documentText.style.display = 'none';
    textEdit.style.display = 'none';
    add.style.display = 'flex';
    document.querySelector('.button').style.display = 'none';
}

for (let i = 0; i < document.getElementsByName('add').length; i++) {

    document.getElementsByName('add')[i].onclick = function (argument) {
        if (document.getElementsByName('add')[i].value === 'table') {
            document.querySelector('.table').style.display = 'block'
        } else {
            document.querySelector('.table').style.display = 'none'
            document.querySelector('.list').style.display = 'block'
        }


    };
};




let tableTr = document.querySelector('#countTr');
let tableTd = document.querySelector('#countTd');
let tdWidth = document.querySelector('#widthTd');
let tdHeight = document.querySelector('#heightTd');
let tableBorderWidth = document.querySelector('#widthBorder');
let tableBorderStyle = document.querySelector('#borderStyle');
let tableBorderColor = document.querySelector('#borderColor');

let tableParamValidator = /^[0-9]{1,}$/;

function tableValidator(parametr) {
    if (tableParamValidator.test(parametr.value) === true) {
        parametr.style.border = 'green solid 2px';


    } else {
        parametr.style.border = 'red solid 2px';

    };
};

tableTr.addEventListener('change', () => {
    tableValidator(tableTr);
});
tableTd.addEventListener('change', () => {
    tableValidator(tableTd);
});
tdWidth.addEventListener('change', () => {
    tableValidator(tdWidth);
});
tdHeight.addEventListener('change', () => {
    tableValidator(tdHeight);
});
tableBorderWidth.addEventListener('change', () => {
    tableValidator(tableBorderWidth);
});


let tableD = '';
let tableR = '';

function tableConstructor(tr, tdHeight, td, tdWidth, borderStyle, borderColor, borderWidth) {


    for (let i = 0; i < td; i++) {
        tableD += `<td  style="height:${tdHeight}px;width:${tdWidth}px;border: ${borderColor} ${borderStyle} ${borderWidth}px;"></td>`
    }
    for (let i = 0; i < tr; i++) {
        tableR += `<tr>${tableD}</tr>`
    }
    textArea.value += `<table>${tableR}</table>`
    tableD = '';
    tableR = '';
}

let createTableBtn = document.querySelector('#tableCreate');

createTableBtn.onclick = () => {
    if (tableParamValidator.test(tableTr.value) === true && tableParamValidator.test(tableTd.value) === true && tableParamValidator.test(tdWidth.value) === true && tableParamValidator.test(tdHeight.value) === true && tableParamValidator.test(tableBorderWidth.value) === true && tableBorderStyle.valid != '' && tableBorderColor != '') {
        tableConstructor(tableTr.value, tdHeight.value, tableTd.value, tdWidth.value, tableBorderStyle.value, tableBorderColor.value, tableBorderWidth.value);
        document.forms[0].reset();
        document.querySelector('.table').style.display = 'none';
        documentText.style.display = 'flex';
        textEdit.style.display = 'flex';
        add.style.display = 'none';
        document.querySelector('.button').style.display = 'flex';

    } else {
        alert('перевірте поля');
    }


}

// створення маркованого списку
let list = document.querySelector('.list');

let ulValidator = /^[0-9]{1,}$/;

let ulFormValidator = (parametr) => {
    if (ulValidator.test(parametr.value) === true) {
        parametr.style.border = 'solid 2px green';
    } else {
        parametr.style.border = 'solid 2px red';
    }
}
let ulStyle = document.querySelector('#ulStyle');

let ulCount = document.querySelector('#ulLiCount');

ulCount.addEventListener('change', () => {
    ulFormValidator(ulCount);
});

let ulCreate = document.querySelector('#ulCreate');

ulCreate.onclick = () => {
    if (ulValidator.test(ulCount.value) === true && ulStyle.value != '') {
        let liBufer = '';
        for (let i = 0; i < ulCount.value; i++) {
            liBufer += `<li>Item${i+1}</li>`;
        }
        textArea.value += `<ul type="${ulStyle.value}">${liBufer}</ul>`;

        list.style.display = 'none'

        list.style.display = 'none';

        documentText.style.display = 'flex';

        textEdit.style.display = 'flex';

        add.style.display = 'none';

        document.querySelector('.button').style.display = 'flex';
    } else {
        alert('перевірте поля');
    }
}