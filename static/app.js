// Switch to prediction page
function showPredictionPage() {
    $("#hero-section").fadeOut(400, function () {
        $("#prediction-section").fadeIn(400);
    });
}

// Switch back to hero page
function showHeroPage() {
    $("#prediction-section").fadeOut(400, function () {
        $("#hero-section").fadeIn(400);
    });
}

// Load locations on page load
function onPageLoad() {
    $.get("/get_location_names", function (data) {
        $("#uiLocations").empty();
        $("#uiLocations").append(new Option("Select Location", ""));

        data.locations.forEach(function (location) {
            $("#uiLocations").append(new Option(location));
        });
    });
}

// Predict price
function onClickedEstimatePrice() {
    var sqft = $("#uiSqft").val();
    var bhk = $("#uiBHK").val();
    var bath = $("#uiBath").val();
    var location = $("#uiLocations").val();

    if (!sqft || !bhk || !bath || !location) {
        alert("Please fill all fields");
        return;
    }

    $.post("/predict_home_price", {
        total_sqft: sqft,
        bhk: bhk,
        bath: bath,
        location: location
    }, function (data) {
        $("#uiEstimatedPrice").html(
            "<h2>₹ " + data.estimated_price + " Lakhs</h2>"
        );
    }).fail(function () {
        alert("Error connecting to server");
    });
}

window.onload = onPageLoad;
