# Home Weather Station

A sleek, modern web dashboard for displaying real-time weather data from your local weather station.

## Features

- Real-time temperature and weather conditions
- Interactive map with location marker (Leaflet + OpenStreetMap)
- Dynamic weather condition icons based on current conditions
- Glassmorphism UI design with smooth animations
- Responsive layout for all screen sizes

## Tech Stack

- **Backend:** Node.js, Express
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **API:** WeatherAPI.com
- **Maps:** Leaflet.js, OpenStreetMap

## Prerequisites

- Node.js (v18 or later)
- A free API key from [WeatherAPI.com](https://www.weatherapi.com/)

## Getting Started

1. Clone the repository

2. Install dependencies (if any are added later)

3. Create a `.env` file in the root directory:

   ```env
   WEATHER_API=your_api_key_here
   PORT=3000
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
Home-weather/
├── index.js              # Express server and API proxy
├── public/
│   ├── index.html        # Main HTML structure
│   ├── general.css       # Global styles and glassmorphism design
│   ├── header.css        # Header-specific styles (legacy)
│   └── weather.js        # Frontend logic, map, and weather fetching
├── .env                  # Environment variables (not committed)
└── package.json          # Project dependencies (if applicable)
```

## API Endpoints

| Method | Endpoint   | Description                |
|--------|------------|----------------------------|
| GET    | `/`        | Serve the weather dashboard |
| GET    | `/callapi` | Proxy request to WeatherAPI |

## Configuration

- **Location:** Currently set to Maitland, Australia (`-32.771829, 151.603743`)
- **Station ID:** IMAITL74
- Update coordinates in `weather.js` (`loadMap` function) to change the map location
- Update the location query in `index.js` to fetch weather for a different city

## Customization

- Modify `general.css` to change colors, gradients, or glassmorphism effects
- Add more weather condition cases in `weather.js` (`updateTextCondition` function)
- Adjust the map zoom level and center coordinates in the `loadMap` function

## License

MIT
