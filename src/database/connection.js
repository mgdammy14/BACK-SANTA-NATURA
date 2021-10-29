import sql from "mssql";

const dbSettings = {
  user: "mundosan_final",
  password: "s@nt@1996",
  server: "66.232.110.133",
  port: 14331,
  database: "mundosan_comercial",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (e) {
    console.log(e);
  }
}
