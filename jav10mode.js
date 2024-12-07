document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        document.getElementById("dark-mode-toggle").textContent = "🌞 Light Mode";
    } else {
        document.getElementById("dark-mode-toggle").textContent = "🌙 Dark Mode";
    }
});

document.getElementById("calculate-btn").addEventListener("click", function () {
    // Get inputs for eco-friendly costs
    const ecoFertilizers = parseFloat(document.getElementById("eco-fertilizers").value) || 0;
    const ecoSeeds = parseFloat(document.getElementById("eco-seeds").value) || 0;
    const ecoEnergy = parseFloat(document.getElementById("eco-energy").value) || 0;

    // Get inputs for conventional costs
    const convFertilizers = parseFloat(document.getElementById("conv-fertilizers").value) || 0;
    const convSeeds = parseFloat(document.getElementById("conv-seeds").value) || 0;
    const convEnergy = parseFloat(document.getElementById("conv-energy").value) || 0;

    // Calculate totals
    const ecoTotal = ecoFertilizers + ecoSeeds + ecoEnergy;
    const convTotal = convFertilizers + convSeeds + convEnergy;
    const difference = Math.abs(ecoTotal - convTotal);

    // Display results
    document.getElementById("eco-total").querySelector("span").textContent = ecoTotal.toFixed(2);
    document.getElementById("conv-total").querySelector("span").textContent = convTotal.toFixed(2);
    document.getElementById("difference").querySelector("span").textContent = difference.toFixed(2);
});

document.getElementById("profit-calculate-btn").addEventListener("click", function () {
    // Get inputs for eco-friendly profit
    const ecoProfit = parseFloat(document.getElementById("eco-profit").value) || 0;

    // Get inputs for conventional profit
    const convProfit = parseFloat(document.getElementById("conv-profit").value) || 0;

    // Calculate profit difference
    const profitDifference = Math.abs(ecoProfit - convProfit);

    // Display profit difference
    document.getElementById("profit-difference").querySelector("span").textContent = profitDifference.toFixed(2);
});
