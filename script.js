document.getElementById("emission-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch form inputs
    const excavation = parseFloat(document.getElementById("excavation").value);
    const transportation = parseFloat(document.getElementById("transportation").value);
    const equipment = parseFloat(document.getElementById("equipment").value);
    const mineSize = parseFloat(document.getElementById("mine-size").value);

    // Emission factors (example: these would be replaced with real-world values)
    const excavationFactor = 0.1; // tons CO2 per ton excavated
    const transportationFactor = 0.05; // tons CO2 per km
    const equipmentFactor = 0.3; // tons CO2 per hour of usage

    // Calculate total emissions
    const totalEmissions = (excavation * excavationFactor) + 
                           (transportation * transportationFactor) + 
                           (equipment * equipmentFactor);

    // Calculate per capita emissions
    const perCapitaEmissions = totalEmissions / mineSize;

    // Display results
    document.getElementById("total-emissions").querySelector("span").textContent = totalEmissions.toFixed(2);
    document.getElementById("per-capita-emissions").querySelector("span").textContent = perCapitaEmissions.toFixed(2);

    // Show the results section
    document.getElementById("results-section").classList.remove("hidden");
});
