document.getElementById('soilForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const ph = parseFloat(document.getElementById('ph').value);
    const moisture = parseFloat(document.getElementById('moisture').value);
    const temperature = parseFloat(document.getElementById('temperature').value);

    let message = '';

    // Analyze soil pH
    if (ph < 5.5) {
        message += 'The soil is too acidic. Consider using lime to balance the pH.<br>';
    } else if (ph > 7.5) {
        message += 'The soil is too alkaline. Use organic compost or sulfur to lower the pH.<br>';
    } else {
        message += 'The soil pH is ideal for most crops.<br>';
    }

    // Analyze moisture level
    if (moisture < 30) {
        message += 'The soil is too dry. Implement drip irrigation or mulching to retain moisture.<br>';
    } else if (moisture > 80) {
        message += 'The soil is too wet. Ensure proper drainage to prevent waterlogging.<br>';
    } else {
        message += 'The moisture level is suitable for crops.<br>';
    }

    // Analyze temperature
    if (temperature < 10) {
        message += 'The temperature is too low. Consider using greenhouses or mulching to maintain warmth.<br>';
    } else if (temperature > 35) {
        message += 'The temperature is too high. Shade nets or misting can help cool the crops.<br>';
    } else {
        message += 'The temperature is within the optimal range for crops.<br>';
    }

    // Display the output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
    outputDiv.style.display = 'block'; // Show the output div
    outputDiv.style.backgroundColor = '#e8f5e9'; // Light green background for output
    outputDiv.style.color = '#388e3c'; // Dark green text color
});
