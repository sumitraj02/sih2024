document.getElementById("afforestation-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch input values
    const emissions = parseFloat(document.getElementById("emissions").value);
    const stateFactor = parseFloat(document.getElementById("state").value);

    // Calculate the land required
    const landRequired = emissions / stateFactor;

    // Update the result with animation
    document.getElementById("land-required").querySelector("span").textContent = landRequired.toFixed(2);
});

document.getElementById("renewables-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Fetch input value for electricity consumption
    const electricity = parseFloat(document.getElementById("electricity").value);

    // Example calculation for alternatives (kWh offsets by solar/wind)
    const solarOffset = electricity * 0.5; // Assume solar can offset 50% of usage
    const windOffset = electricity * 0.3;  // Assume wind can offset 30%

    // Update the result with animation
    document.getElementById("solar").querySelector("span").textContent = solarOffset.toFixed(2);
    document.getElementById("wind").querySelector("span").textContent = windOffset.toFixed(2);
});
