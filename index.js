const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('body-parser');

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

  console.log('req', req.body);

  const {tel, name, pizza} = req.body

  const message = 
  `У вас нове замовлення
    Імя: ${name}
    Телефон: ${tel} 
    Піца: ${pizza}
  `

  console.log(`замовлення ${message}`);
  bot.sendMessage(3997929, message);
  res.send(`замовлення ${message}`)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
