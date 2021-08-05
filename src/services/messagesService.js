import aftercreditsAPI from "../config/api";

export async function getMessages(){
  console.log("getMessages")
  const response = await aftercreditsAPI.get("/api/messages")
  console.log(response)
  return response
}