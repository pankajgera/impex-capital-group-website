import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
            </Routes>
    );
};

export default AppRoutes;
