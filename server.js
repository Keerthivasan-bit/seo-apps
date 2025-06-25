import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

const app = express()

// ✅ Configure CORS to allow requests only from your frontend domain
app.use(cors({
  origin: 'https://seo-app-eight.vercel.app', // allow only this frontend
  credentials: true, // if using cookies or auth headers
}))

app.use(express.json())

connectDB()

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
