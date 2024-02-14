function calcluteButton() {
    const baseInputField = document.getElementById('base-input-field').value;
    const base = parseFloat(baseInputField);
    
    const heightInputField = document.getElementById('height-input-field').value;
    const height = parseFloat(heightInputField);
    
    const multipole = 0.5 * base * height;
    
    const areaInput = document.getElementById('area-input');
    areaInput.innerText = multipole;
}
// Function Rectangle-2

function rectangleButton() {
    const widthInputField = document.getElementById('width-input-field').value;
    const width =parseFloat(widthInputField);

    const lengthInputField = document.getElementById('length-input-field').value;
    const length = parseFloat(lengthInputField);

    const area = width * length;
    
    const rectangInput = document.getElementById('rectangle-area');
    rectangInput.innerText = area;
}

