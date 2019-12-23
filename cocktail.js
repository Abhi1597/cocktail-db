$(document).ready(function () {
    // your code goes here

    // Gets the cocktail details from the API
    $("#searchBtn").click(function () {
        var size = null
        var drinkName = $("#search").val()
        var cocktailSearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkName
        console.log(cocktailSearch)
        $.ajax({
            url: cocktailSearch,
        })
            .done(function (data) {
                console.log(data)
                displayDrinks(data)
            });
    })

    // Display Drinks from Search Bar
    function displayDrinks(input) {
        var size = input.drinks.length
        // console.log(input[2].title)
        $("#displayDrinks").empty()
        for (var i = 0; i < size; i++) {
            var imgLink = input.drinks[i].strDrinkThumb
            var drinkName = input.drinks[i].strDrink

            var div1 = document.createElement('div')
            $(div1).addClass("col-3")
            $(div1).html("<div class='row mt-3 mb-2 mx-1'><div class='col-12'><img class='img-fluid img-thumbnail' src=" + imgLink + " alt='1'></div><div class='text-center text-nowrap col-12'>" + drinkName + "</div></div>")
            $("#displayDrinks").append(div1)
        }
    }

    // Browse Drinks starting with any alphabet
    $(".btn-dark").click(function () {
        var alphabet = this.id
        console.log(alphabet)
        var alphabetSearch = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + alphabet
        // console.log(alphabetSearch)
        $.ajax({
            url: alphabetSearch,
        })
            .done(function (data) {
                console.log(data)
                displayAlphaDrinks(data)
                // console.log(a)
            });
    })

    // Display the drinks starting with the particular alphabet
    function displayAlphaDrinks(input){
        $("#carouselDisplay").hide() // Hiding the containers to display alphabet wise Drinks
        $("#cocktailSearch").hide()
        var size = input.drinks.length

        $(".browseSelection").empty() // Empty the container on each alphabet click
        var div1 = document.createElement('div')
        $(div1).addClass("row text-center")
        $(div1).html('<div class="col text-center"><h1>Browse Drinks</h1></div>')

        var majorDiv = document.createElement('div')
        $(majorDiv).addClass("row")
        $(div1).append(majorDiv)
        $(".browseSelection").prepend(div1)
        for (var i = 0; i < size; i++) {
            var imgLink = input.drinks[i].strDrinkThumb + "/preview"
            var drinkName = input.drinks[i].strDrink

            var div2 = document.createElement('div')
            $(div2).addClass("col-3")
            $(div2).html("<div class='row mt-3 mb-2'><div class='col-12'><img class='img-fluid' src=" + imgLink + " alt='1'></div><div class='text-center text-nowrap col-12'>" + drinkName + "</div></div>")
            $(majorDiv).append(div2)
        }
    }

});