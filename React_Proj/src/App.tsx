import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import LoginAdmin from "../Pages/LoginAdmin";
import WebDonor from "../Pages/WebDonor";
import WebOrganization from "../Pages/WebOrganization";
import Index from "../Pages/Index";
import Register from "../Pages/Register";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function App() {
  let items = ["Kamal", "Said", "Kamal"];
  //Passing parameters to components

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
}
export default App;
