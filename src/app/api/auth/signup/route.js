import { connect } from "@/utils/mongoConnect";
import User from "@/models/users";
import bcryptjs from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest) {
  try {
    connect();

    const request = await NextRequest.json();
    const { username, email, password } = request;

    const user = await User.findOne({ $or: [{ username }, { email }] });

    if (user && user.username === username) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 409 }
      );
    } else if (user && user.email === email) {
      return NextResponse.json(
        { error: "Email already taken" },
        { status: 409 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
    });

    const addUser = await newUser.save();

    return NextResponse.json({
      message: "User successfully signedin",
      success: true,
      addUser,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
