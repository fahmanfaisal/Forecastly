# Weather Dashboard

A responsive weather dashboard built with **React**, **Vite** and **Tailwind CSS**. It shows live weather for your current location or a city you search for, using the [OpenWeatherMap API](https://openweathermap.org/api). You can save favourite cities to come back to.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

---

## Features

- **Live weather data**: temperature, min/max, humidity, cloud cover and wind speed from OpenWeatherMap.
- **Automatic location**: uses the browser's Geolocation API to show weather for where you are.
- **Location search**: debounced search input to switch between cities.
- **Favourites**: save and remove cities. They are stored in `localStorage`, so they survive a page reload.
- **Dynamic backgrounds and icons**: the background image and weather icon change with the current conditions (clear, clouds, rain, snow, mist, and so on).
- **Modern UI**: a frosted-glass design with a responsive layout, built only with Tailwind utility classes.

## Tech Stack

| Layer      | Technology                                   |
| ---------- | -------------------------------------------- |
| UI         | React 18 (function components and hooks)     |
| State      | React Context API                            |
| Styling    | Tailwind CSS 3                               |
| Build tool | Vite 5                                       |
| Data       | OpenWeatherMap Current Weather API           |
| Linting    | ESLint with `react` and `react-hooks` plugins |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- A free [OpenWeatherMap API key](https://home.openweathermap.org/api_keys)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd weatherDashboard

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
#    then open .env and add your API key

# 4. Start the development server
npm run dev
```

The app runs at `http://localhost:5173`.

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=your_openweathermap_api_key
```

> **Notes**
> - Don't add quotes or a trailing semicolon. Vite reads the value literally.
> - Restart the dev server after you change `.env`.
> - New OpenWeatherMap keys can take up to a couple of hours to start working. Until then, requests return `401 Unauthorized`.
> - Any variable prefixed with `VITE_` is included in the client bundle. Never commit `.env`; it is already listed in `.gitignore`.

## Available Scripts

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Start the development server with HMR       |
| `npm run build`   | Build an optimised production bundle into `dist/` |
| `npm run preview` | Serve the production build locally          |
| `npm run lint`    | Run ESLint on the project                   |

## Project Structure

```
weatherDashboard/
├── public/                     # Static files served as-is
├── src/
│   ├── assets/                 # Icons and background images
│   ├── components/
│   │   ├── header/             # Logo, Search, Favourites button and list
│   │   └── weather/            # WeatherBoard, Headline, Conditions, AddToFavourite
│   ├── context/                # React contexts (Location, Weather, Favourite)
│   ├── data/                   # Searchable city list
│   ├── hooks/                  # useWeather, useDebounce, useLocalStorage
│   ├── provider/               # Context providers wrapping the app
│   ├── utils/                  # Date formatting helpers
│   ├── App.jsx                 # Provider composition
│   ├── Page.jsx                # Layout and dynamic background
│   └── main.jsx                # Entry point
├── .env.example
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## How It Works

1. `LocationProvider` holds the selected city. It starts empty.
2. `useWeather` (inside `WeatherProvider`) watches the selected location:
   - If a city is selected, it fetches weather for that city's coordinates.
   - Otherwise it asks the browser for the user's current position.
   - Requests that are no longer needed are cancelled with an `AbortController`.
3. `FavouriteProvider` keeps the favourites list in sync with `localStorage` through the `useLocalStorage` hook.
4. Components read what they need from context. Nothing is passed down through props.

## Known Limitations

- Search matches a fixed list of cities in `src/data/location-data.js` (London, Kolkata, Dhaka, Singapore, New York and Toronto), and the name must match exactly, including capitals.
- Wind speed comes from the API in metres per second but is labelled km/h.
- The time shown is when the data was last updated, in the viewer's local timezone, not the city's local time.

## Roadmap

- [ ] Search any city through the OpenWeatherMap Geocoding API
- [ ] Show API and geolocation errors in the UI
- [ ] 5-day forecast view
- [ ] Celsius / Fahrenheit toggle

## Acknowledgements

- Weather data by [OpenWeatherMap](https://openweathermap.org/)
- Built with [React](https://react.dev/), [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/)
# Forecastly
