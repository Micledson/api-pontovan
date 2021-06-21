import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("🎲 Banco de dados conectado com sucesso"))
  .catch((err) => console.log(err.message));
