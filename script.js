$(document).ready(function () {
    var beerid;

    $("#from").change(function () {
        beerid = $(this).val();
    });

    $("#btn").click(function () {
        if (!beerid) {
            alert("Please enter a valid beer ID");
            return;
        }

        fetch('https://api.punkapi.com/v2/beers/' + beerid)
            .then((response) => response.json())
            .then((data) => {
                if (data.length === 0) {
                    alert("No beer found with ID " + beerid);
                } else {
                    // Redirect to beer-details.html with beer data as query parameter
                    window.location.href = 'beer-details.html?beerName=' + data[0].name + '&beerTagline=' + data[0].tagline + '&beerDescription=' + data[0].description;
                }
            })
            .catch(error => {
                console.log(error);
                alert("Error fetching beer data.");
            });
    });
});
