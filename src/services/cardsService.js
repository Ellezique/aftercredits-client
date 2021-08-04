// See T3W12- Thursday Morning- Brisbane @ 1:13:00

import aftercreditsAPI from "../config/api"

export async function getCards(){
  console.log("getCards")
  const response = await aftercreditsAPI.get("/api/cards")
  console.log(response)
  return response
}