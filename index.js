const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Seja, bem vindo!');
});

app.get("/users", (request, response) => {
  
  response.send("Você chamou o endpoint:/users pelo metodo get")
});

app.post("/products", (request, response) => {
  const { name, price, description } = request.body;

  const message = `Você chamou o endpoint:/products pelo método POST<br>Produto: ${name}.<br>Preço: ${price}.<br>Descrição: ${description}`;

  response.send(message);
});

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
