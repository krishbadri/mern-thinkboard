import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import rateLimiter from "./middleware/rateLimiter.js";
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"


dotenv.config({path: "./src/.env"})

console.log(process.env.MONGO_URI)

const app = express();
const PORT = process.env.PORT || 5001


// middleware
app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json())
app.use(rateLimiter)
app.use((req, res, next) => {
    console.log(`req method is ${req.method} and req url is ${req.url}`);
    next();
})

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    }) 
})
