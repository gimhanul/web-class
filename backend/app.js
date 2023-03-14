const http = require('http');
const url = require('url');
const querystring = require('querystring');
const fs = require('fs');
const index = fs.readFileSync('index.html')
const admin = fs.readFileSync('admin.html')


const hostname = '127.0.0.1';
const port = 8088;

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

const server = http.createServer((req, res) => {
  const u = url.parse(req.url)

  if (u.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(index);
  }

  if (u.pathname === '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    return res.end(admin);
  }

  if (u.pathname === '/hello') {
    const query = querystring.parse(u.query)
    return res.end(`hello, ${query.name}`)
  }

  if (u.pathname === '/login' && req.method === 'POST') {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    return req.on('end', () => {
      const {name, password} = JSON.parse(body);
      if (user.name === name && user.password === password) {
        res.end(`${name}님 안녕하세용`);
      } else if (user.name !== name) {
        res.end('계정이 없습니당ㅋㅋ');
      } else if (user.password !== password) {
        res.end('비번이 틀림ㅅㄱ');
      }});
  }

  if (u.pathname === '/cats') {
    const query = querystring.parse(u.query)
    if (req.method === 'GET' && query.id != null) {
      return res.end(JSON.stringify(cats[query.id]));
    }

    if (req.method === 'GET') {
      return res.end(JSON.stringify(cats));
    }

    if (req.method === 'POST') {
      let body = '';

      req.on('data', (data) => {
        body += data;
      });

      return req.on('end', () => {
        const { name, age } = JSON.parse(body);
        cats.push({
          name: name,
          age: age
        })
        res.end()
      })
    }

    if (req.method === 'PUT') {
      let body = '';

      req.on('data', (data) => {
        body += data;
      });

      return req.on('end', () => {
        const { name, age } = JSON.parse(body);
        cats[query.id] = {
          name: name,
          age: age
        }
        res.end()
      })
    }

    if (req.method === 'DELETE') {
      cats.splice(query.id, 1)
      res.end()
    }
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
})
