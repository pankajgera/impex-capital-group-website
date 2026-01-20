import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";
import Contact from "../pages/Contact/Contact";
import News from "../pages/News/News";
import Investors from "../pages/Investors/Investors";

const AppRoutes = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/investors" element={<Investors />} />
                <Route path="/news" element={<News />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
    );
};

export default AppRoutes;
