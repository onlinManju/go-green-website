document.getElementById("checkUsageBtn").addEventListener("click", function() {
    const waterUsage = document.getElementById("waterInput").value;
    const usageMessage = document.getElementById("usageMessage");

    if (waterUsage === "") {
        usageMessage.textContent = "Please enter a valid water usage amount.";
        usageMessage.style.color = "red";
    } else {
        // Providing feedback based on water usage
        if (waterUsage <= 50) {
            usageMessage.textContent = "Great job! Your water usage is within an eco-friendly range.";
            usageMessage.style.color = "green";
        } else if (waterUsage <= 100) {
            usageMessage.textContent = "You're doing well, but try to reduce your water usage to save more.";
            usageMessage.style.color = "orange";
        } else {
            usageMessage.textContent = "High water usage detected. Consider implementing water-saving techniques.";
            usageMessage.style.color = "red";
        }
    }
});

document.getElementById("harvestInfo").addEventListener("click", function() {
    const tipsElement = document.getElementById("rainTips");
    tipsElement.innerHTML = `<strong>Rainwater Harvesting Tips:</strong><ul>
        <li>Install gutters to collect rainwater from your roof.</li>
        <li>Use rain barrels or tanks to store collected rainwater.</li>
        <li>Use a filter to ensure the water is clean before usage.</li>
        <li>Ensure that your storage system has a lid to prevent contamination.</li>
    </ul>`;
  
    // Update rainwater level info
    document.getElementById("rainLevel").textContent = "85 mm"; // Example data update
});
