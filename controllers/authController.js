import {Student} from "../models/StudentModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * @DESC GET ALL books
 * @ROUTE /api/v1/loginLibrary
 * @METHOD post
 * @access PUBLIC
 */

export const loginLibrary = async (req, res) => {
	const { email, password } = req.body;

	// validation
	if (!email || !password) {
		return res.status(400).json({ message: "all fields are required" });
	}

	// user check
	const logUser = await Student.findOne({ email: email });

	if (!logUser) {
		return res.status(404).json({ message: "invalid email address" });
	}

	// pass check
	const passCheck = await bcrypt.compare(password, logUser.password);

	// pass check
	if (!passCheck) {
		return res.status(400).json({ message: "wrong passward" });
	}

	// create access token
	const accessToken = jwt.sign(
		{ email: logUser.email },
		process.env.JWT_SECRET,
		{
			expiresIn: "7d",
		}
	);

    //set token
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure : process.nextTick.APP_ENV === "Development" ? false : true,
        sameSite : "strict",
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000,
    });

	res.status(200).json({
		message: `hello ${logUser.studentName}, you are now logged in`,
		student: logUser,
		token: accessToken,
	});
};




/**
 * @DESC logoutUser
 * @ROUTE /api/v1/logoutLibrary
 * @METHOD GET
 * @access PUBLIC
 */

export const logoutLibrary = async (req, res) => {
	
    //remove token
    res.clearCookie("accessToken");

	res.status(200).json({
		message: `you are now logged out`
	});
};