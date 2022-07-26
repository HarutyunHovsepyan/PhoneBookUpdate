const express = require("express");
const app = express();
const cors = require('cors');
const { AllController } = require("./controller/AllController");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.get("/", (req, res) => {
    res.send({ status: "OK" })
})

app.post("/addPhone", AllController.addPhone)
app.get("/allPhone", AllController.allPhones)
app.get("/morePhone/:id", AllController.getPhone)
app.get("/delPhones/:id", AllController.delPhone)
app.get("/editPhone/:id", AllController.editPhone)
app.post("/findPhone", AllController.findPhone)


app.listen(5000);