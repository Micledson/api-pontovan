import { createConnection } from "typeorm";

createConnection().then(() => console.log("conectado com sucesso"));
