$(document).ready(function search() {
    $('.movie4').hide();
    $('.movie5').hide();
    $('.movie6').hide();
    $('.series-text1').hide();
    // Animations
    setTimeout(function () {
        $('.movie1').hide();
        $('.movie6').fadeIn();
    }, 3000)

    setTimeout(function () {
        $('.movie3').hide();
        $('.movie5').fadeIn();
    }, 6000)

    setTimeout(function () {
        $('.movie2').hide();
        $('.movie4').fadeIn();
    }, 9000)

    setTimeout(function () {
        $('.movie6').hide();
        $('.movie1').fadeIn();
    }, 12000)

    setTimeout(function () {
        $('.movie4').hide();
        $('.movie2').fadeIn();
    }, 15000)

    setTimeout(function () {
        $('.movie5').hide();
        $('.movie3').fadeIn();
    }, 17000)

    setTimeout(function () {
        $('.series2').animate({
            opacity: '0.5',
        });
    }, 10000)

    setTimeout(function () {
        $('.series4').animate({
            opacity: '0.5',
        });
    }, 13000)

    setTimeout(function () {
        $('.series6').animate({
            opacity: '0.5',
        });
    }, 16000)
    setTimeout(function () {
        $('.series2').animate({
            opacity: '1',
        });
    }, 16000)

    setTimeout(function () {
        $('.series1').animate({
            opacity: '0.5',
        });
    }, 12000)
    setTimeout(function () {
        $('.series3').animate({
            opacity: '0.5',
        });
    }, 14000)
    setTimeout(function () {
        $('.series4').animate({
            opacity: '1',
        });
    }, 14000)
    setTimeout(function () {
        $('.series5').animate({
            opacity: '0.5',
        });
    }, 17000)
    setTimeout(function () {
        $('.series6').animate({
            opacity: '1',
        });
    }, 16000)
    setTimeout(function () {
        $('.series4').animate({
            opacity: '1',
        });
    }, 17000)
    setTimeout(function () {
        $('.series1').animate({
            opacity: '1',
        });
    }, 18000)
    setTimeout(function () {
        $('.series3').animate({
            opacity: '1',
        });
    }, 19000)
    setTimeout(function () {
        $('.series5').animate({
            opacity: '1',
        });
    }, 19000)

    $('.home-series-item').click(function () {
        $('.series-text').fadeIn();
    })

    $('input').click(function () {
        $('#search').animate({
            width: '70%',
            height: '60px',
        })
    })
    $('#search').change(function () {
        $('.home').hide();
        $('.home2').hide();
        $(".title").animate({
            opacity: '0.5',
        });
        $(".top").animate({
            opacity: '0.5',
            width: '50%',
            height: '20%',
        });
        $('.results').hide();
        setTimeout(function () {
            $('.results').fadeIn();
        }, 200)
        $.ajax({
            url: 'http://www.omdbapi.com/?s=' + $('#search').val() + '&apikey=f82971f4',
            dataType: 'json',
            success: function (response) {
                for (let i = 0; i < response.Search.length; i++) {
                    $('.results').append("<img class=\"film\" data-id=\"" + response.Search[i].imdbID + "\" src=\"" + response.Search[i].Poster + "\"></img>");
                }
                secondApi()
            }
        })
    })

    function secondApi() {
        // Deuxieme requête Ajax
        $('.film').click(function (event) {
            let imdbKey = $(event.target).attr('data-id');
            $(".results").animate({
                height: 'toggle',
            }, 'slow');
            $.ajax({
                url: 'http://www.omdbapi.com/?i=' + imdbKey + '&apikey=f82971f4',
                dataType: 'json',
                success: function (response) {
                    $('#search').val(response.Title);
                    $('.movie-img').append('<div class=\"film-img\"><img src=\"' + response.Poster + '\"></img></div>');
                    $('.movie-info').append('<h2>' + response.Title + ' (' + response.Year + ')</h2>');
                    $('.movie-info').append('<hr>');
                    $('.movie-info').append('<h4>by ' + response.Director + '</h4>');
                    $('.movie-info').append('<p> <span>Country:</span> ' + response.Country + '</p>');
                    $('.movie-info').append('<p> <span>Genre:</span> ' + response.Genre + '</p>');
                    $('.movie-info').append('<p> <span>Actors:</span> ' + response.Actors + '</p>');
                    $('.movie-info').append('<p> <b>' + response.Plot + '</b></p>');
                    $('.movie-info').append('<p> <span> Released in ' + response.Released + '</span></p>')
                    $('.movie-info').append('<h3>Rating of ' + response.imdbRating + '/10</h3>');
                }
            })
        })

    }
});