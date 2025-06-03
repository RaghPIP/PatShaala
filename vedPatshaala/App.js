import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login";

function App() {
    return (
        <section className="bg-amber-50">
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </section>
    );
}

export default App;
