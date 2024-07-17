import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString()
  
  const dataBaseVersionResult = await database.query("SELECT version();")
  console.log(dataBaseVersionResult)
  
  response.status(200).json({
    updated_at:updatedAt,
  });
}
export default status;
