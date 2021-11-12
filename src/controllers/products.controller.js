import { getConnection } from "../database/connection";

export const getProducts = async (req, res) => {
  
  const pool = await getConnection();
  
  const result = await pool.request().execute("USP_LISTADOPRODUCTOS");

  res.json(result.recordset);
};
