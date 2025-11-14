import { Routes, Route } from "react-router-dom";
import { Home,Services,Information,About,Contact,Error404} from "@/pages";

export default function AppRoutes() {
  return (
    <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/information-center" element={<Information />} />
      <Route path="*" element={<Error404/>} />

    </Routes>
  );
}