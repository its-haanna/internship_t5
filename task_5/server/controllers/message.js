import {db} from "../db.js"

export const addMessage = (req, res) => {
  res.json("from controller")
} 

export const getMessages = (req, res) => {
  const sender = req.body.sender

  const sqlSelect = "SELECT * FROM data";
  db.query(sqlSelect, (err, result) => {
    res.send(result)
  })
} 