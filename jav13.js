// script.js
document.getElementById('predict-btn').addEventListener('click', () => {
    const cropType = document.getElementById('crop-type').value;
    const soilType = document.getElementById('soil-type').value;
    const nitrogen = parseFloat(document.getElementById('nitrogen').value);
    const phosphorus = parseFloat(document.getElementById('phosphorus').value);
    const potassium = parseFloat(document.getElementById('potassium').value);
    const output = document.getElementById('fertilizer-output');

    if (!cropType || !soilType || isNaN(nitrogen) || isNaN(phosphorus) || isNaN(potassium)) {
        output.textContent = 'Please fill out all fields.';
        return;
    }

    let recommendation = 'Balanced Fertilizer';

    // Simple logic for prediction
    if (nitrogen < 20) {
        recommendation = 'Urea';
    } else if (phosphorus < 15) {
        recommendation = 'Single Super Phosphate (SSP)';
    } else if (potassium < 15) {
        recommendation = 'Muriate of Potash (MOP)';
    }

    // Customize based on soil type
    if (soilType === 'sandy') {
        recommendation += ' (Apply more frequently due to leaching)';
    }

    // Customize based on crop type
    if (cropType === 'rice') {
        recommendation += ' for Rice Cultivation';
    }

    output.textContent = recommendation;
});
