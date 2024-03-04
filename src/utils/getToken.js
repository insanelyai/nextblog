import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

export const getDataToken = async (NextRequest) => {
  try {
    const token = (await NextRequest.cookies.get("UAT")?.value) || "";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    return decodedToken.id;
  } catch (error) {
    console.log(error);
  }
};
