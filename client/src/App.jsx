import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import WatchVideo from "./pages/WatchVideo";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

    return (

        <Routes>

            <Route path="/" element={<Login />} />

            <Route path="/register" element={<Register />} />

            <Route
                path="/dashboard"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/watch/:id"
                element={
                    <ProtectedRoute>
                        <WatchVideo />
                    </ProtectedRoute>
                }
            />

        </Routes>

    );

}

export default App;