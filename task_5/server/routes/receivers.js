import express from "express"
import {addReceiver} from "../controllers/receiver.js"

const router = express.Router()

router.get("/", addReceiver)
router.get("/:recipient", addReceiver)

export default router
