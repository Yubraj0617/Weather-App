# Weather App

## Overview
The Weather App is a web-based application designed to provide users with real-time weather updates, including current conditions, forecasts, and other meteorological information. Built with modern React.js and the Vite.js bundler, the app offers a smooth user interface with fast refresh capabilities.

## Features
- **Accurate Weather Updates**: Fetches current weather conditions, forecasts, and city-specific details.
- **Location-based Weather**: Automatically detects the user's location and retrieves weather data for the coordinates.
- **Custom Search**: Search for weather updates in specific cities.
- **Interactive Charts**: 5-day weather forecasts visualized using charts.
- **Google Maps Integration**: Displays the location of the searched city or coordinates on a map.

## Technologies Used
- **Frontend**: React.js with Vite.js
- **API Integration**: OpenWeatherMap API to fetch weather data.
- **Google Maps API**: For map visualization and geographical details.
- **Charting**: Recharts library for data visualization.
- **Styling**: A combination of CSS and class-based styling.
- **Dependency Management**: Node.js and npm (Package manager).

## Getting Started
### Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed.
- API keys for OpenWeatherMap and Google Maps.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Yubraj0617/Weather-App.git
   cd Weather-App
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Rename `.env.example` to `.env` and update it with your API keys:
     ```text
     VITE_Weather_API_KEY=your_openweather_api_key
     VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

4. Run the application:
   ```bash
   npm run dev
   ```

5. Open the app in your browser:
   Navigate to `http://localhost:5173`.

## Project Structure
- `src/App.jsx`: Root entry point of the app.
- `src/main.jsx`: React DOM rendering setup.
- `src/Page/Landing.jsx`: Main logic for the landing page, which fetches and formats weather data.
- `src/Component`: Reusable components such as `Bar`, `chart`, `Header`, `googleMap`, `inputText`, etc.
- `src/API/apiCall.js`: Functions for API calls to OpenWeatherMap API.
- `src/utils/weatherFormat.js`: Helper function to format weather data.
- `index.html`: Base HTML entry.

## Usage
1. Open the app and allow location access for automatic weather updates.
2. Use the search bar to input a city name and retrieve weather details for that city.
3. Switch between text-based details and chart visualizations to view the data.
4. View the city location on an embedded Google Map.

## Contributing
Contributions are welcome! Fork this repository and submit a pull request with your updates.

1. **Fork** the project.
2. **Create** a new branch (e.g., `feature-enhancement`):
   ```bash
   git checkout -b feature-enhancement
   ```
3. **Commit** changes:
   ```bash
   git commit -m "Add some enhancement"
   ```
4. **Push** to your branch:
   ```bash
   git push origin feature-enhancement
   ```
5. Open a pull request.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
**Author**: [Yubraj0617](https://github.com/Yubraj0617)

For more details, visit the [repository](https://github.com/Yubraj0617/Weather-App).
