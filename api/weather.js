// Vercel serverless function: proxies OpenWeatherMap so the API key stays on the server.
export default async function handler(req, res) {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ message: "lat and lon are required" });
    }

    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        return res
            .status(500)
            .json({ message: "WEATHER_API_KEY is not configured" });
    }

    const params = new URLSearchParams({
        lat,
        lon,
        appid: apiKey,
        units: "metric",
    });

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?${params}`
        );
        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (err) {
        return res.status(502).json({ message: "Failed to reach weather service" });
    }
}
