
import express from 'express'
import notesRouter from './routes/note.routes.js'

export const app = express()



app.use(express.json({limit: "100kb"}))


app.use('/api/v1/notes', notesRouter)

