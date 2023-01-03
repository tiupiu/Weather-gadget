function weatherBalloon( cityID ) {
    document.getElementById('weather').style.display = '';

    var key = 'fc56e83e80ac54397faf8f1cdf9aa238';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&appid=' + key + '&units=metric')  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
        drawWeather(data);
        console.log(data);
    })
    .catch(function() {
        // catch any errors
    });
    }

    function drawWeather( d ) { 
        var iconcode = d.weather[0].icon;
        var src = "http://openweathermap.org/img/wn/" + iconcode + ".png"
        var img = document.getElementById("icon");
        img.src = src;

        document.getElementById('description').innerHTML = d.weather[0].description;
        document.getElementById('temp').innerHTML = d.main.temp + " °C";
        document.getElementById('feels_like').innerHTML = "feels like: " + d.main.feels_like + " °C";
        document.getElementById('location').innerHTML = d.sys.country;
        document.getElementById('city').innerHTML = d.name + ",";
    }

    function handleClick() {
        const cityInput = document.getElementById('search').value;
        weatherBalloon ( cityInput);

        const d = new Date();
        var date =  (d.getDate() < 10 ? '0' : '') + d.getDate() + "/" + (d.getMonth() < 10 ? '0' : '') + 1 + "/" + d.getFullYear();
        var time = d.getHours() + ":" + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes() + ":" + (d.getSeconds() < 10 ? '0' : '') + d.getSeconds();
        document.getElementById('updated').innerHTML = "Last updated: " + date + " " + time;
    }
