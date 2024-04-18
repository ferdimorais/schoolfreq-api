import express from "express";
import {
  getAllDisciplina,
  getSingleDisciplina,
} from "./disciplina.controllers.js";

const router = express.Router();

router.route("/").get(getAllDisciplina);
router.route("/:id").get(getSingleDisciplina);

export default router;
