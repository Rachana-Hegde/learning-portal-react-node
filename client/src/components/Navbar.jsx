import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {

    const { logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/");

    };

    return (

        <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">

            <Link
                to="/dashboard"
                className="text-2xl font-bold"
            >
                Learning Portal
            </Link>

            <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
                Logout
            </button>

        </nav>

    );

}