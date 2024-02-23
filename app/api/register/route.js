import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";
import bcrypt from "bcrypt";
export async function POST(req) {
    await dbConnect();
    const { name, email, password } = await req.json();
    try {
        await new User({
            name,
            email,
            password: await bcrypt.hash(password, 10),
        }).save();
        return NextResponse.json({ success: "User created successfully" });
    } catch (err) {
        // 422 - unprocessable entity
        return NextResponse.json({ err: err.message }, { status: 422 });
    }
}