import express from 'express'
import cors from 'cors'
import foodRouter from './routes/foodRoutes.js'
import userRouter from './routes/userRoutes.js'

const app = express()
app.use(express.json())
app.use(
    cors({
        credentials: true,
        origin: ['http://localhost:3000']
    })
)
app.use(express.json())

app.use('/api/foods', foodRouter)
app.use('/api//users', userRouter)
const PORT = 5000
app.listen(PORT, () => {
    console.log('listening on port '+ PORT);
})