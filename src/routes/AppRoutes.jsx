import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
    );
};

export default AppRoutes;
