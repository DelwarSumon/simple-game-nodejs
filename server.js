const express = require("express")
const app = express()
const port = 3000

app.use(
  express.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get("/:name", async (req, res) => {
    const name = req.params.name
    const number = req.query.num
    let message = "";
    if(isNaN(number) || number < 1 || number > 10){
        message = "You are not following the instruction. Enter a number which is between 1-10."
    }else{
        const randNum = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        if(parseInt(randNum) === parseInt(number)){
            message = "Congrats! You are win this Game.";
        }else{
            message = "Opps! You are lose this Game. Try again."
        }
    }
    res.send(`${message} <br><br><a href="/">Go home</a>`)
  })
  