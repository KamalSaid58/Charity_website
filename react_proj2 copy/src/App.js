import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Register from "./Pages/Register";
import { useNavigate } from "react-router-dom";
import SideNavBar from "./Components/SideNavBar";
import NavigationBar from "./Components/NavigationBar";
import "./App.css";
import LoginTrial from "./Pages/LoginTrial";
import Admin from "./Pages/Admin";
import Donor from "./Pages/Donor";
import Organ from "./Pages/Organ";
import RegisterDonor from "./Pages/RegisterDonor";
import RegisterOrgan from "./Pages/RegisterOrgan";
import ChangePassword from "./Pages/ChangePassword";
import Doctor from "./Pages/Doctor";
import Teacher from "./Pages/Teacher";
import OrganList from "./Pages/OrganList";
import DonorList from "./Pages/DonorList";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <NavigationBar text="HAMADAAA"></NavigationBar>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="d-flex flex-column align-items-center align-items-sm-start p-0 text-white min-vh-100 w-auto">
            <SideNavBar />
          </div>

          <div className="col py-3">
            <Routes>
              <Route path="/ViewReqDon" element={<ViewReqDon />} />
              <Route
                path="/ViewListOfClothReq"
                element={<ViewListOfClothReq />}
              />
              <Route path="/loginTrial" element={<LoginTrial />} />
              {/* check if any info changed between all logins */}
              <Route path="/register" element={<Register />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/Donor" element={<Donor />} />
              <Route path="/Organ" element={<Organ />} />
              <Route path="/RegisterDonor" element={<RegisterDonor />} />
              <Route path="/RegisterOrgan" element={<RegisterOrgan />} />
              <Route path="/ChangePassword" element={<ChangePassword />} />
              <Route path="/OrganList" element={<OrganList />} />
              <Route path="/DonorList" element={<DonorList />} />
              <Route path="/SchoolSupp" element={<SchoolSupp />} />
              <Route path="/Options" element={<Options />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/" element={<StartPage />} />{" "}
              {/* Include the StartPage route */}
              <Route
                path="/ViewOrganizationAdmin"
                element={<ViewOrganizationAdmin />}
              />{" "}
              {/* Include the StartPage route */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
