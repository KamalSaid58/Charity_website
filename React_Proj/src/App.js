import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./Pages/LoginAdmin";
import WebDonor from "./Pages/WebDonor";
import WebOrganization from "./Pages/WebOrganization";
import Index from "./Pages/Index";
import Register from "./Pages/Register";
import { useNavigate } from "react-router-dom";
import SideBar from "./Components/SideBar";
import NavigationBar from "./Components/NavigationBar";
function App() {
  let items = ["Kamal", "Said", "Kamal"];
  //Passing parameters to components

  const navigate = useNavigate();
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <SideBar></SideBar>
      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/loginAdmin" element={<LoginAdmin />} />

        <Route path="/loginAdmin" element={<LoginAdmin />} />

        <Route path="/loginAdmin" element={<LoginAdmin />} />
        {/* check if any info changed between all logins */}
        <Route path="/registerDonor" element={<Register />} />

        <Route path="/registerOrganization" element={<Register />} />

        <Route path="/webDonor" element={<WebDonor />} />

        <Route path="/webOrganization" element={<WebOrganization />} />
      </Routes>
    </div>
  );
}
export default App;
