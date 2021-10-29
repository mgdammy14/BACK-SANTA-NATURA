import { getConnection } from "../database/connection";

export const getProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM Producto");

  res.json(result.recordset);
};
