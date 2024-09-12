
loadMap();


async function fetchWeather() {

    const response = await fetch('/callapi');
    const data = await response.json();
    console.log(data);

    const local_time = data.location.localtime.split(" ");

    const temp = data.current.temp_c;
    const headerLocation = data.location.name;
    const current_condition = data.current.condition.text;
    const day_night = data.current.is_day;

    updateHeader(local_time[0], headerLocation);
    updateTemperature(temp);
    updateTextCondition(current_condition, day_night);

    

}



function updateHeader(time, location) {
    const head_element = document.getElementById('header');
    head_element.innerHTML = `${time} <br> ${location}<br>Station ID - IMAITL74 `;
}


function updateTextCondition(text, day_or_night){
    const text_condtion = document.getElementById('current-text-weather');
    text_condtion.innerText = text;

    document.getElementById('condition-photos').style.display = 'block';

    switch (text) {
        case "Sunny":
            document.getElementById('condition-photos').src = 'images/sunny.png';
            break;
        case "Cloudy":
            document.getElementById('condition-photos').src = 'images/cloud.png';
            break;
        case "Partly Cloudy":
            document.getElementById('condition-photos').src = 'images/partlycloudy.png';
            break;
        case 'Clear':
            if (day_or_night === 0){
                document.getElementById('condition-photos').src = 'images/moon.png';
            } else {
                document.getElementById('condition-photos').src = 'images/clear.png';
            }
            break;
        default:
            document.getElementById('condition-photos').style.display = 'none';
            break;
    }
}

function updateTemperature(temp) {
    document.getElementById('current-temp').innerText = `${temp}°C `;
}



function loadMap () {
    const map = L.map('map').setView([-32.771829, 151.603743], 12);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([-32.771829, 151.603743]).addTo(map);
}