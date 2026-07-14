import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

/* Generate JWT Token */

const generateToken = (id) => {

    return jwt.sign(

        { id },

        process.env.JWT_SECRET,

        {

            expiresIn: "7d",

        }

    );

};

/* ---------------- Register ---------------- */

export const register = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({

                message: "All fields are required"

            });

        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                message: "Email already registered"

            });

        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({

            name,

            email,

            password: hashedPassword,

        });

        res.status(201).json({

            message: "Registration Successful",

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

            }

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};

/* ---------------- Login ---------------- */

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({

                message: "Email and Password required"

            });

        }

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "Invalid Email"

            });

        }

        const isMatch = await bcrypt.compare(

            password,

            user.password

        );

        if (!isMatch) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }

        res.status(200).json({

            message: "Login Successful",

            token: generateToken(user._id),

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

            }

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};