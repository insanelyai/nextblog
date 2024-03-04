import { connect } from "@/utils/mongoConnect";
import User from "@/models/users";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connect();

export async function POST(NextRequest) {
  try {
    const request = await NextRequest.json();

    const { username, password } = request;

    const user = await User.findOne({ username });

    if (!user) {
      return NextResponse.json(
        {
          message: "Couldn't find account with username ",
        },
        { status: 401 }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Incorrect password",
          message: "Please try again with correct password",
          success: false,
        },
        { status: 401 }
      );
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "7d",
    });

    const response = NextResponse.json({
      message: "Login Successfull",
      success: true,
      username: user.username,
    });

    response.cookies.set("UAT", token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
