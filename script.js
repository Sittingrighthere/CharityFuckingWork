const body = document.getElementsByTagName("BODY")[0];
const formField = document.getElementById('formField');
const fieldExcludeList = ['scREVA','scLEVA','ccREVA','ccLEVA','rSph','rCyl','rAxi','rAdd','rPrism','rfVA','rnVA','rMEM','lSph','lCyl','lAxi','lAdd','lPrism','lfVA','lnVA','lMEM','rSKiasNondil','lSKiasNondil','rSKiasdil','lSKiasdil','rPres','lPres'];


const createInput = ((parent,type,id,name, ...tags) => {
    if (fieldExcludeList.indexOf(id)!==-1||type=='checkbox') {
        
    } else {
        const label = document.createElement('label')
        label.innerHTML = id;
        label.htmlFor = id;
        label.id = id + 'Label';
        parent.appendChild(label); 
    }

    const input = document.createElement('input')
    input.type = type;
    input.id = id;
    input.name = name;
    tags.forEach(tag => {
        const tagSplit = tag.split(":") 
        input.setAttribute(tagSplit[0],tagSplit[1])
    })
    parent.appendChild(input);

    if (type=='checkbox') {
        const label = document.createElement('label')
        label.innerHTML = id;
        label.htmlFor = id;
        label.id = id + 'Label';
        parent.appendChild(label);
    }
});

const createDIV = ((parent,type,innerText,id, ...tags) => {
    const DIV = document.createElement(type)
    DIV.innerHTML=innerText;
    DIV.id = id;
    tags.forEach(tag => {
        const tagSplit = tag.split(":") 
        DIV.setAttribute(tagSplit[0],tagSplit[1])
    })
    parent.appendChild(DIV);
});

const createMultiInput = ((parent,type,id,name, ...choices) => {
    const label = document.createElement('label')
    label.innerHTML = id;
    label.htmlFor = id;
    parent.appendChild(label);
    
    choices.forEach(choice => {
        const choiceLabel = document.createElement('label')
        choiceLabel.innerHTML = choice;
        choiceLabel.htmlFor = choice;
        const choiceInput = document.createElement('input')
        choiceInput.type = type;
        choiceInput.id = choice;
        choiceInput.name = name;
        parent.appendChild(choiceLabel);
        parent.appendChild(choiceInput);
        }) 
});

const addForm = (() => {
    const form = document.createElement('form');
    const fieldBoxes = document.createElement('fieldset');
    const PI = document.createElement('fieldset');
    const entranceTest = document.createElement('fieldset');
    const objectiveTesting = document.createElement('fieldset');
    const subjectiveTesting = document.createElement('fieldset');
    const prescription = document.createElement('fieldset');
    const submitBtn = document.createElement('button');
    
    fieldBoxes.id = 'fieldBoxes';
    PI.id = 'PI';
    entranceTest.id = 'entranceTest';
    objectiveTesting.id = 'objectiveTesting';
    subjectiveTesting.id = 'subjectiveTesting';
    prescription.id = 'prescription';
    submitBtn.id = 'submitBtn';
    
    form.setAttribute('method','post');
    form.setAttribute('action','https://script.google.com/macros/s/AKfycbyDoaOkNIBoeGc0bAB6eso0FyEkuirxiTT4K5Yykhk/dev');
    submitBtn.setAttribute('type','submit')
    submitBtn.innerHTML= 'submit';
    
    
    body.appendChild(form);
    form.appendChild(PI);
    form.appendChild(fieldBoxes);
    form.appendChild(entranceTest);
    form.appendChild(objectiveTesting);
    form.appendChild(subjectiveTesting);
    form.appendChild(prescription);
    form.appendChild(submitBtn);
    

    createInput(fieldBoxes,'checkbox','Th??? l???c','entranceTestCheck','onclick:checkField("Th??? l???c","entranceTest")','checked')
    createInput(fieldBoxes,'checkbox','Skiascopy','objectiveTestingCheck','onclick:checkField("Skiascopy","objectiveTesting")','checked')
    createInput(fieldBoxes,'checkbox','Kh??c x??? ch??? quan','subjectiveTestingCheck','onclick:checkField("Kh??c x??? ch??? quan","subjectiveTesting")','checked')
    createInput(fieldBoxes,'checkbox','????n k??nh','prescriptionCheck','onclick:checkField("????n k??nh","prescription")','checked')

    createInput(PI,'text','PID','PID');
    createInput(PI,'date','DOB','DOB');

    createDIV(entranceTest,'legend','Th??? l???c','entranceLegend');
    createDIV(entranceTest,'div','','blankGrid','class:entranceTestGrid');
    createDIV(entranceTest,'div','Kh??ng k??nh','Kh??ng k??nh','class:entranceTestGrid');
    createDIV(entranceTest,'div','C?? k??nh','C?? k??nh','class:entranceTestGrid');
    createDIV(entranceTest,'div','M???t ph???i','M???t ph???i','class:entranceTestGrid');
    createInput(entranceTest,'number','scREVA','scREVA','class:entranceTestGrid','step:0.5');
    createInput(entranceTest,'number','ccREVA','ccREVA','class:entranceTestGrid','step:0.5');
    createDIV(entranceTest,'div','M???t tr??i','M???t tr??i','class:entranceTestGrid');
    createInput(entranceTest,'number','scLEVA','scLEVA','class:entranceTestGrid','step:0.5');
    createInput(entranceTest,'number','ccLEVA','ccLEVA','class:entranceTestGrid','step:0.5');
    
    createDIV(objectiveTesting,'legend','Skiascopy','objectiveLegend');
    createDIV(objectiveTesting,'div','','blankGrid','class:objTestGrid');
    createDIV(objectiveTesting,'div','Kh??ng li???t ??i???u ti???t','Kh??ng li???t ??i???u ti???t','class:objTestGrid');
    createDIV(objectiveTesting,'div','Li???t ??i???u ti???t','Li???t ??i???u ti???t','class:objTestGrid');
    createDIV(objectiveTesting,'div','M???t ph???i','M???t ph???i','class:objTestGrid');
    createInput(objectiveTesting,'text','rSKiasNondil','rSKiasNondil','class:objTestGrid');
    createInput(objectiveTesting,'text','rSKiasdil','rSKiasdil','class:objTestGrid');
    createDIV(objectiveTesting,'div','M???t tr??i','M???t tr??i','class:objTestGrid');
    createInput(objectiveTesting,'text','lSKiasNondil','lSKiasNondil','class:objTestGrid');
    createInput(objectiveTesting,'text','lSKiasdil','lSKiasdil','class:objTestGrid');


    createDIV(subjectiveTesting,'legend','Kh??c x??? ch??? quan','subjectiveLegend');
    createDIV(subjectiveTesting,'div','','blankGrid','class:subTestGrid');
    createDIV(subjectiveTesting,'div','C???u','C???u','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Tr???','Tr???','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Tr???c','Tr???c','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Add','Add','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Th??? l???c xa','Th??? l???c xa','class:subTestGrid');
    createDIV(subjectiveTesting,'div','Th??? l???c g???n','Th??? l???c g???n','class:subTestGrid');
    createDIV(subjectiveTesting,'div','L??ng K??nh','L??ng K??nh','class:subTestGrid');
    createDIV(subjectiveTesting,'div','M???t ph???i','M???t ph???i','class:subTestGrid');
    createInput(subjectiveTesting,'number','rSph','rSph','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rCyl','rCyl','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rAxi','rAxi','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rAdd','rAdd','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rPrism','rPrism','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rfVA','rfVA','class:subTestGrid resultGrid','step:0.25');
    createInput(subjectiveTesting,'number','rnVA','rnVA','class:subTestGrid resultGrid','step:0.25');
    createDIV(subjectiveTesting,'div','M???t tr??i','M???t tr??i','class:subTestGrid');
    createInput(subjectiveTesting,'number','lSph','lSph','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lCyl','lCyl','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lAxi','lAxi','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lAdd','lAdd','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lPrism','lPrism','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lfVA','lfVA','class:subTestGrid','step:0.25');
    createInput(subjectiveTesting,'number','lnVA','lnVA','class:subTestGrid','step:0.25');
      
    createDIV(prescription,'legend','????n k??nh','prescriptionLegend');
    createDIV(prescription,'div','M???t ph???i','M???t ph???i','class:prescriptionGrid');
    createInput(prescription,'text','rPres','rPres','class:prescriptionGrid');
    createDIV(prescription,'div','M???t tr??i','M???t tr??i','class:prescriptionGrid');
    createInput(prescription,'text','lPres','lPres','class:prescriptionGrid');
    
})();

// const setTwoNumberDecimal = (() => {
//     const number = document.getElementsByClassName('resultGrid');
//    number.onchange(console.log(1))
//    number.value = parseFloat(number.value).toFixed(2);
// })();

const checkField = ((checkboxName,fieldName) => {
    const checkBox = document.getElementById(checkboxName);
    const checkField = document.getElementById(fieldName);

    if (checkBox.checked == true) {
        checkField.style.display = "flex";
    } else {
        checkField.style.display = "none";
    };
});

const tranferFromObj = ((side,skias) => {
    if (side=='right') {
        const Sph = document.getElementById('rSph');
        const Cyl = document.getElementById('rCyl');
        const Axi = document.getElementById('rAxi');
        const Prescription = document.getElementById('rPres');
        const skiasSplit = skias.split(/[/x]/);
        Sph.value = skiasSplit[0];
        Cyl.value = skiasSplit[1];
        Axi.value = skiasSplit[2];
        Prescription.value=skias;
    } else {
        const Sph = document.getElementById('lSph');
        const Cyl = document.getElementById('lCyl');
        const Axi = document.getElementById('lAxi');
        const Prescription = document.getElementById('lPres');
        const skiasSplit = skias.split(/[/x]/);
        Sph.value = skiasSplit[0];
        Cyl.value = skiasSplit[1];
        Axi.value = skiasSplit[2];
        Prescription.value=skias;
    }
});

const tranferFromSubj = ((side,Sph,Cyl,Axi) => {
    if (side=='right') {
        const rPrescription = document.getElementById('rPres');
        rPrescription.value = (Sph + '/' + Cyl + 'x' + Axi);
    } else {
        const lPrescription = document.getElementById('lPres');
    }
});

const autoTrasferFromObj = (() => {
    const rSkiasNondil = document.getElementById('rSKiasNondil');
    const lSkiasNondil = document.getElementById('lSKiasNondil');
    const rSkiasdil = document.getElementById('rSKiasdil');
    const lSkiasdil = document.getElementById('lSKiasdil');
    rSkiasNondil.onchange = () => tranferFromObj('right',rSkiasNondil.value);
    lSkiasNondil.onchange = () => tranferFromObj('left',lSkiasNondil.value);
    rSkiasdil.onchange = () => tranferFromObj('right',rSkiasdil.value);
    lSkiasdil.onchange = () => tranferFromObj('left',lSkiasdil.value);
})();

const autoTrasferFromSubj = (() => {
    const rSph = document.getElementById('rSph');
    const rCyl = document.getElementById('rCyl');
    const rAxi = document.getElementById('rAxi');
    const lSph = document.getElementById('lSph');
    const lCyl = document.getElementById('lCyl');
    const lAxi = document.getElementById('lAxi');
    rSph.onchange = () => tranferFromSubj('right',rSph.value,rCyl.value,rAxi.value);
    rCyl.onchange = () => tranferFromSubj('right',rSph.value,rCyl.value,rAxi.value);
    rAxi.onchange = () => tranferFromSubj('right',rSph.value,rCyl.value,rAxi.value);
    lSph.onchange = () => tranferFromSubj('left',lSph.value,lCyl.value,lAxi.value);
    lCyl.onchange = () => tranferFromSubj('left',lSph.value,lCyl.value,lAxi.value);
    lAxi.onchange = () => tranferFromSubj('left',lSph.value,lCyl.value,lAxi.value);
})();

const printResult = (() => {
    const submit = document.getElementById('submitBtn');
    submit.addEventListener('click', function() {
        if (document.getElementById('Th??? l???c').checked == false) {
            const checkField = document.getElementById('entranceTest');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('entranceTest');
            checkField.style.display = "inline-block";
        };
        if (document.getElementById('Skiascopy').checked == false) {
            const checkField = document.getElementById('objectiveTesting');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('objectiveTesting');
            checkField.style.display = "inline-block";
        };
        if (document.getElementById('Kh??c x??? ch??? quan').checked == false) {
            const checkField = document.getElementById('subjectiveTesting');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('subjectiveTesting');
            checkField.style.display = "inline-block";
        };
        if (document.getElementById('????n k??nh').checked == false) {
            const checkField = document.getElementById('prescription');
            checkField.style.display = "none";
        } else {
            const checkField = document.getElementById('prescription');
            checkField.style.display = "inline-block";
        };
        submitBtn = document.getElementById('submitBtn')
        submitBtn.style.display = "none";
        window.print();
    })
})();