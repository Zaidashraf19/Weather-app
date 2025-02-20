const city = document.getElementById ('city');
const form = document.getElementById ('form');
const output = document.getElementById ('output');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(city.value);
    axios(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${city.value}&aqi=no`)
    .then(res => {
        console.log(res.data);
        const data = res.data
        output.innerHTML += `
        <div style="background-color: #548cca;" class="p-1 border rounded">
      <h2>${data.location.name}, ${data.location.country}</h2>
      <div class="d-flex justify-content-around">
        <div class="fs-3">${data.current.condition.icon}</div>
        <div class="fs-3">${data.current.temp_c}°C</div>
        <div class="fs-4">Feelslike: ${data.current.feelslike_c}°C<br>
        Humidity: ${data.current.humidity}%<br>
        Wind:${data.current.wind_kph}Kph</div>
      </div>
    </div>
        `
    }).catch(err => {
        console.log('error ==> ' , err);
        alert('no city found')
    })
    city.value = ""
})