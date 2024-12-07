// Theme toggle functionality
const toggleThemeButton = document.getElementById('toggle-theme');
toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleThemeButton.textContent = 'Switch to Light Mode';
  } else {
    toggleThemeButton.textContent = 'Switch to Dark Mode';
  }
});

// Calculate carbon emissions
document.getElementById('calculate-btn').addEventListener('click', function () {
  // Get inputs for eco-friendly farming
  const ecoFertilizers = parseFloat(document.getElementById('eco-fertilizers').value) || 0;
  const ecoEnergy = parseFloat(document.getElementById('eco-energy').value) || 0;
  const ecoTransport = parseFloat(document.getElementById('eco-transport').value) || 0;

  // Get inputs for conventional farming
  const convFertilizers = parseFloat(document.getElementById('conv-fertilizers').value) || 0;
  const convEnergy = parseFloat(document.getElementById('conv-energy').value) || 0;
  const convTransport = parseFloat(document.getElementById('conv-transport').value) || 0;

  // Calculate totals
  const ecoTotal = ecoFertilizers + ecoEnergy + ecoTransport;
  const convTotal = convFertilizers + convEnergy + convTransport;
  const difference = convTotal - ecoTotal;

  // Update results
  document.getElementById('eco-total').textContent = ecoTotal.toFixed(2);
  document.getElementById('conv-total').textContent = convTotal.toFixed(2);
  document.getElementById('difference').textContent = difference.toFixed(2);

  // Show results
  document.getElementById('results').classList.remove('hidden');
});
