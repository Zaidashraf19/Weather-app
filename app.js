const city = document.getElementById ('city');
const form = document.getElementById ('form');
const output = document.getElementById ('output');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(city.value);
    axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
    .then(res => {
        console.log(res.data);
        const data = res.data;
        // output.innerHTML=""
        output.innerHTML += `
        <div id = "child" class="p-2 rounded">
         <div>
            <img src="https:${data.current.condition.icon}" alt="Weather Icon">
          </div>
            <h2 class = "text-start">${data.location.name}, ${data.location.region} - ${data.location.country}</h2> <br>
          <div class="d-flex justify-content-around flex-wrap g-5">
              <div class = "fs-1"><i class="fa-solid fa-cloud"></i></div>
              <div>${data.current.temp_c}°C</div>
              <div>Feels like: ${data.current.feelslike_c}°C<br>
              Humidity: ${data.current.humidity}%<br>
              Wind: ${data.current.wind_kph}Kph</div>
          </div>
          <b>${data.location.localtime}</b>
        </div>
        `
    }).catch(err => {
        console.log('error ==> ' , err);
        alert('no city found')
    })
    city.value = ""
})