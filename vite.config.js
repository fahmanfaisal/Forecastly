import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import weatherHandler from './api/weather.js'

// Serves the Vercel /api/weather function during `npm run dev`
function devApi(apiKey) {
  return {
    name: 'dev-api',
    configureServer(server) {
      server.middlewares.use('/api/weather', (req, res) => {
        req.query = Object.fromEntries(
          new URL(req.url, 'http://localhost').searchParams
        )
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (body) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(body))
        }
        weatherHandler(req, res, apiKey)
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), devApi(env.WEATHER_API_KEY)],
  }
})
