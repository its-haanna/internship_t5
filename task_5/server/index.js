import express from "express"
import messageRoutes from "./routes/messages.js"
import receiversRoutes from "./routes/receivers.js"
import cors from "cors"
import {db} from "./db.js"

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}));

app.use("/api/messages", messageRoutes)
app.use("/api/receivers", receiversRoutes)

app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log('running');
});