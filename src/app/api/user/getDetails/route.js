import { getDataToken } from "@/utils/getToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/users";
import { connect } from "@/utils/mongoConnect";

connect();

export async function GET(NextRequest) {
  try {
    const userID = await getDataToken(NextRequest);
    const user = await User.findOne({ _id: userID }).select("-password");

    return NextResponse.json({ message: "User found", data: user });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
