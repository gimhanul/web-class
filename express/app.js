const express = require('express');
const path = require('path');

const app = express();

const user = {
  name: 'hanul',
  password: 'hanul'
}

const cats = [{
  name: 'blue',
  age: 5
}, {
  name: 'milk',
  age: 1,
}, {
  name: 'bob',
  age: 3,
}]

app.use(express.json())

app.get('/', (request, response) => {
  const { name } = request.query
  // response.end(`hello, ${name}`)
  response.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/admin', (request, response) => {
  response.sendFile(path.join(__dirname, 'public/admin.html'))
})

app.post('/login', (request, response) => {
  const { name, password } = request.body

  if (user.name === name && user.password === password) {
    response.send(`${name}님 안녕하세용`);
  } else if (user.name !== name) {
    response.send('계정이 없습니당ㅋㅋ');
  } else if (user.password !== password) {
    response.send('비번이 틀림ㅅㄱ');
  }
})

// cats
app.get('/cats', (request, response) => {
  const { id } = request.query
  response.send(id ? cats[id] : cats)
})

app.post('/cats', (request, response) => {
  const { name, age } = request.body;
  cats.push({
    name: name,
    age: age
  })
  response.end()
})

app.put('/cats', (request, response) => {
  const { id } = request.query
  const { name, age } = request.body;
  cats[id] = {
    name: name,
    age: age
  }
  response.end()
})

app.delete('/cats', (request, response) => {
  const { id } = request.query
  cats.splice(id, 1)
  response.end()
})

app.listen(3030, () => {
  console.log('Server running at http://127.0.0.1:3030')
})
