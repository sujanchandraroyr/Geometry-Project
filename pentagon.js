function pentagonCalculate() {
    const pentaregular = getElement('pentagonep');
    const pentabase = getElement('pentagonebase');

    const pentagonArea = pentaregular * pentabase;
    
    setInnerTextbyId('pentaare', pentagonArea);
};

function getElement(inputFieldId) {
    const inputField = document.getElementById(inputFieldId).value;
    const inputValue =parseFloat(inputField);
    
    return inputValue;
   
};

function setInnerTextbyId(elementId, aroo) {
    const elementid = document.getElementById(elementId);
    elementid.innerText = aroo;
    // return elementid;
}

