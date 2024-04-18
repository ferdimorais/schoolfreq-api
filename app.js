import express from "express";
import dotenv from "dotenv";
import { notFound } from "./src/middlewares/notFound.js";
import { handleError } from "./src/middlewares/handleError.js";
import alunoRoute from "./src/resources/aluno/aluno.routes.js";
import faltaRoute from "./src/resources/falta/faltas.routes.js";
import disciplinaRoute from "./src/resources/disciplina/disciplina.routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

// api routes
app.use("/aluno", alunoRoute);
app.use("/falta", faltaRoute);
app.use("/disciplina", disciplinaRoute);

app.use(notFound);
app.use(handleError);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
