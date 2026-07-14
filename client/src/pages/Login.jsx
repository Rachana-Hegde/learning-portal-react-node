import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();

    const { login } = useAuth();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", {

                email,

                password,

            });

            login(res.data.token);

            navigate("/dashboard");

        } catch (err) {

            alert(err.response?.data?.message || "Login Failed");

        }

    };

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-96"
            >

                <h2 className="text-3xl font-bold mb-6 text-center">

                    Student Login

                </h2>

                <input
                    className="w-full border p-3 rounded mb-4"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="w-full border p-3 rounded mb-4"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    className="w-full bg-blue-600 text-white py-3 rounded"
                >
                    Login
                </button>

                <p className="mt-4 text-center">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-blue-600 ml-2"
                    >
                        Register
                    </Link>

                </p>

            </form>

        </div>

    );

}