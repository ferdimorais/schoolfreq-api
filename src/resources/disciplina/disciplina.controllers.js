 import { pool } from "../../db/connect.js";
import { createCustomError } from "../../errors/customErrors.js";
import { tryCatchWrapper } from "../../middlewares/tryCatchWrapper.js";

/**
 * @returns Disciplina object
 */
async function getDisciplina(id) {
  let sql = "SELECT * FROM Disciplina WHERE DISCIPLINA = ?";
  const [rows] = await pool.query(sql, [id]);
  return rows[0];
}

/**
 * @description Get All Disciplina
 * @route GET /Disciplina
 */
export const getAllDisciplina = tryCatchWrapper(async function (req, res, next) {
  let sql = "SELECT * from Disciplina";
  const [rows] = await pool.query(sql);
  if (!rows.length) return res.status(204).json({ message: "Não foram encontrados resultados" });

  return res.status(200).json({ Disciplina: rows });
});

/**
 * @description Get Single Disciplina
 * @route GET /Disciplina/:id
 */
export const getSingleDisciplina = tryCatchWrapper(async function (req, res, next) {
  const { id } = req.params;

  const Disciplina = await getDisciplina(id);
  if (!Disciplina) return next(createCustomError("Disciplina não encontrada", 404));

  return res.status(200).json(Disciplina);
});
