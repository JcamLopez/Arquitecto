import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import url from 'url'
import cors from 'cors'
import login from './routes/login.routes.js'

/* Init */
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
app.set('port', process.env.PORT || 5000)


/* Midleware */
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
 app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))  

/* Routes */


app.use(login)

/* public */
app.use(express.static(path.join(__dirname, "public")))


/* server */
app.listen(app.get("port"), () => {
    console.log(
        "El servidor se inicio en el puerto " +
        "http://localhost:" +
        app.get("port")
    );
});