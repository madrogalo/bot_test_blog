const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// replace the value below with the Telegram token you receive from @BotFather
const token = '5316242247:AAFyHPFGoIgVwexRtM2b0KnHFYXOn90bSoo';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  const newArr = req.body.map((item) => 
  `
  🍕 ${item.pizzaName}
  розмір: ${item.size}
  кількість: ${item.quantity}
  тісто: ${item.dough}
  ціна: ${item.price}
  `);
  const message = newArr.join('');

  bot.sendMessage(3997929, message);

  res.send(`${message}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
