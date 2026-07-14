import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

export default function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.post("/auth/register", {

                name,

                email,

                password,

            });

            alert("Registration Successful");

            navigate("/");

        }

        catch (err) {

            alert(err.response?.data?.message || "Registration Failed");

        }

    };

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg w-96"
            >

                <h2 className="text-3xl font-bold mb-6 text-center">

                    Student Registration

                </h2>

                <input
                    className="w-full border p-3 rounded mb-4"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                />

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
                    className="w-full bg-green-600 text-white py-3 rounded"
                >
                    Register
                </button>

                <p className="mt-4 text-center">

                    Already have an account?

                    <Link
                        className="text-blue-600 ml-2"
                        to="/"
                    >
                        Login
                    </Link>

                </p>

            </form>

        </div>

    );

}