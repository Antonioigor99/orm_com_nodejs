/** aqui é inde inicia o servidor http */
const app = require('./src/app.js');

const PORT = 3000;

app.listen(PORT, () => {
  console.log('servidor escutando!');
});
