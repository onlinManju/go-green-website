// script.js

// Toggle dark mode functionality
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('cropForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get input values
    const location = document.getElementById('location').value.toLowerCase();
    const climate = document.getElementById('climate').value.toLowerCase();
    const soil = document.getElementById('soil').value.toLowerCase();

    // Logic to recommend crops based on inputs
    let recommendations = "";

    if (climate === "tropical" && soil === "loamy") {
        recommendations = "We recommend planting rice, sugarcane, or bananas.";
    } else if (climate === "arid" && soil === "sandy") {
        recommendations = "We recommend planting drought-resistant crops like millet, sorghum, or cactus.";
    } else if (climate === "temperate" && soil === "clay") {
        recommendations = "We recommend planting wheat, corn, or beans.";
    } else {
        recommendations = "Please provide more specific details for better recommendations.";
    }

    // Display recommendations
    document.getElementById('recommendations').innerHTML = `
        <h2>Recommended Crops:</h2>
        <p>${recommendations}</p>
    `;
});

// Add to the JavaScript
const ecoTips = {
    pestControl: "Use natural predators or organic pesticides like neem oil to control pests.",
    irrigation: "Implement drip irrigation to reduce water usage and increase efficiency.",
    fertilizers: "Use compost or organic fertilizers to reduce the environmental impact of chemical fertilizers."
};

document.getElementById('ecoTips').innerHTML = `
    <h2>Eco-friendly Tips:</h2>
    <ul>
        <li><strong>Pest Control:</strong> ${ecoTips.pestControl}</li>
        <li><strong>Irrigation:</strong> ${ecoTips.irrigation}</li>
        <li><strong>Fertilizers:</strong> ${ecoTips.fertilizers}</li>
    </ul>
`;
