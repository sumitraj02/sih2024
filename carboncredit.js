document.getElementById("carbon-credits-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const emissionsOffset = parseFloat(document.getElementById("emissions-offset").value);
    const marketRate = parseFloat(document.getElementById("market-rate").value);

    const carbonCredits = emissionsOffset * marketRate;

    document.getElementById("carbon-credits").querySelector("span").textContent = carbonCredits.toFixed(2);
});

// Data for chart visualization
const ctx = document.getElementById('emissionChart').getContext('2d');
const emissionChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Emission Reductions (tons CO2)',
            data: [120, 115, 110, 105, 95, 90, 85],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animations: {
            tension: {
                duration: 1000,
                easing: 'easeInOutBounce',
                from: 1,
                to: 0,
                loop: true
            }
        }
    }
});
