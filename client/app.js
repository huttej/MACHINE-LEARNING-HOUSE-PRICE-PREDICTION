// Function to switch from Hero to Prediction
function showPredictionPage() {
    $('#hero-section').fadeOut(500, function() {
        $('#prediction-section').fadeIn(500);
    });
}

// Function to switch from Prediction to Hero
function showHeroPage() {
    $('#prediction-section').fadeOut(500, function() {
        $('#hero-section').fadeIn(500);
    });
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    
    // Get values from numeric inputs
    var sqft = document.getElementById("uiSqft").value;
    var bhk = document.getElementById("uiBHK").value;
    var bath = document.getElementById("uiBath").value;
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    // Validation
    if(!sqft || !location || !bhk || !bath) {
        alert("Please fill in all details correctly.");
        return;
    }

    // Server URL
    var url = "http://127.0.0.1:5000/predict_home_price"; 

    // Send POST request
    $.post(url, {
        total_sqft: parseFloat(sqft),
        location: location,
        bhk: parseInt(bhk),
        bath: parseInt(bath)
    }, function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakhs</h2>";
    }).fail(function() {
        alert("Error connecting to server. Make sure your Flask app is running.");
    });
}

// Load locations from server on page start
function onPageLoad() {
    console.log("Document loaded, fetching locations...");
    var url = "http://127.0.0.1:5000/get_location_names";
    
    $.get(url, function(data, status) {
        if(data && data.locations) {
            var locations = data.locations;
            $('#uiLocations').empty();
            $('#uiLocations').append(new Option("Choose a Location", "", true, true));
            for(var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

window.onload = onPageLoad;