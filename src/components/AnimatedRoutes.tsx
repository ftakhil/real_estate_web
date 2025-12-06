import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "../pages/Index";
import About from "../pages/About";
import Gallery from "../pages/Gallery";
import Lifestyle from "../pages/Lifestyle";
import FindUs from "../pages/FindUs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import PageTransition from "./PageTransition";

// Development Pages
import WhereWeAre from "../pages/development/WhereWeAre";
import PropertyHighlights from "../pages/development/PropertyHighlights";
import MasterPlan from "../pages/development/MasterPlan";
import GoingGreen from "../pages/development/GoingGreen";
import HomeConstruction from "../pages/development/HomeConstruction";
import ProjectUpdates from "../pages/development/ProjectUpdates";
import Ownership from "../pages/development/Ownership";
import InTheNews from "../pages/development/InTheNews";
import ProjectStatus from "../pages/development/ProjectStatus";
import Careers from "../pages/development/Careers";
import LeadQualificationForm from "../components/LeadQualificationForm";

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Index /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
                <Route path="/lifestyle" element={<PageTransition><Lifestyle /></PageTransition>} />
                <Route path="/find-us" element={<PageTransition><FindUs /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />

                {/* Development Routes */}
                <Route path="/development/where-we-are" element={<PageTransition><WhereWeAre /></PageTransition>} />
                <Route path="/development/property-highlights" element={<PageTransition><PropertyHighlights /></PageTransition>} />
                <Route path="/development/master-plan" element={<PageTransition><MasterPlan /></PageTransition>} />
                <Route path="/development/going-green" element={<PageTransition><GoingGreen /></PageTransition>} />
                <Route path="/development/home-construction" element={<PageTransition><HomeConstruction /></PageTransition>} />
                <Route path="/development/project-updates" element={<PageTransition><ProjectUpdates /></PageTransition>} />
                <Route path="/development/ownership" element={<PageTransition><Ownership /></PageTransition>} />
                <Route path="/development/in-the-news" element={<PageTransition><InTheNews /></PageTransition>} />
                <Route path="/development/project-status" element={<PageTransition><ProjectStatus /></PageTransition>} />
                <Route path="/development/careers" element={<PageTransition><Careers /></PageTransition>} />

                <Route path="/qualify" element={<LeadQualificationForm />} />

                <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
